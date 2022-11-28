import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Navbar from '../../shared/Navbar/Navbar';
import CheckoutForm from './CheckoutForm';

const Payment = () => {
    const productPayment = useLoaderData()
    // const navigation = useNavigation();
    const { model, price } = productPayment;

    // if (navigation.state === 'loading') {
    //     return <progress className="progress w-56"></progress>;
    // }
    const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_pk);
    // console.log(stripePromise);
    return (
        <div>
            <Navbar></Navbar>
            <div className='mt-10 text-center'>
                <h1>Your product <strong>{model}</strong></h1>
                <h1>Your total price Tk <strong>{price}</strong></h1>
            </div>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm productPayment={productPayment} />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;