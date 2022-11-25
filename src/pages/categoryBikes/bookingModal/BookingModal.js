import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const BookingModal = ({ product }) => {
    const { user } = useContext(AuthContext);
    const { model, resale_price } = product;

    const handleBooking = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const model = form.model.value;
        const price = form.price.value;
        const number = form.number.value;
        const location = form.location.value;

        // console.log(name, email, model, price, number, location);
        const booking = {
            name,
            email,
            model,
            price,
            number,
            location
        }
        fetch('http://localhost:5000/bookings', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.acknowledged) {
                    toast.success('Your booking submitted successfully')
                    form.reset();
                }
            })
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <input type="text" name='name' defaultValue={user.displayName} placeholder='Your Name' className='input w-full input-bordered' disabled />
                        <input type="email" name='email' defaultValue={user?.email} placeholder='Email Address' className='input w-full input-bordered' disabled />
                        <input type="text" name='model' defaultValue={model} placeholder='model' className='input w-full input-bordered' disabled />
                        <input type="number" name='price' defaultValue={resale_price} placeholder='price' className='input w-full input-bordered' disabled />
                        <input type='text' placeholder='Phone Number' name='number' className='input w-full input-bordered' />
                        <input type='text' placeholder='meeting location' name='location' className='input w-full input-bordered' />
                        <br />
                        <input className='btn btn-primary w-full max-w-xs' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;