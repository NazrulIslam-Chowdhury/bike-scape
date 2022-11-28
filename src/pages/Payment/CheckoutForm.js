
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CheckoutForm = ({ productPayment }) => {
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState("");
    const stripe = useStripe();
    const elements = useElements();
    const navigate = useNavigate();
    const { price, name, email, _id } = productPayment;

    useEffect(() => {
        fetch('http://localhost:5000/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ price })
        })
            .then((res) => res.json())
            .then((data) => {
                setClientSecret(data.clientSecret)

            });
    }, [price])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if (error) {
            console.log(error);
            setCardError(error.message);
        }
        else {
            setCardError('');
        }

        setSuccess('');
        setProcessing(true);
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: name,
                        email: email
                    },
                },
            },
        );

        if (confirmError) {
            setCardError(confirmError.message);
            return;
        }
        if (paymentIntent.status === 'succeeded') {


            const payment = {
                price,
                transactionId: paymentIntent.id,
                email,
                bookingId: _id
            }
            fetch('http://localhost:5000/payments', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    if (data.insertedId) {
                        setSuccess('Your payment successful');
                        setTransactionId(paymentIntent.id);
                        navigate('/my-orders');
                    }
                })
        }
        setProcessing(false);
    }
    return (
        <>
            <form onSubmit={handleSubmit} className='bg-gray-200 p-4 lg:mx-60 md:mx-48  mt-5'>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button type="submit" disabled={!stripe || !clientSecret || processing} className='btn btn-primary mt-3 btn-sm'>
                    Pay
                </button>
            </form>
            <p className="text-red-500 text-lg text-center">{cardError}</p>
            {
                success &&
                <div className='text-center'>
                    <p className='text-primary text-lg'>{success}</p>
                    <p>Your transactionId : <span className='font-bold text-lg'>{transactionId}</span></p>
                </div>
            }
        </>
    );
};

export default CheckoutForm;