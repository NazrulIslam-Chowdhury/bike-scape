import React from 'react';
import toast from 'react-hot-toast';
import { FaCalendarAlt, FaMale, FaMapMarkerAlt } from 'react-icons/fa';



const CategoryBike = ({ bike, setBookProduct }) => {
    const { name, image_url, location, resale_price, original_price, model, quality, published_date, used, brand, details } = bike;

    const handleReport = () => {
        const item = {
            model,
            brand,
            resale_price,
            name,
            published_date
        }
        fetch('https://assignment-12-server-iota.vercel.app/report-items', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(item)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.acknowledged) {
                    toast.success('Report item successful');
                }
            })
    }
    return (
        <div>
            <div className="card card-compact w-auto h-content bg-base-200 shadow-2xl shadow-black rounded-b-lg rounded-t-none">
                <figure><img className='max-h-64' src={image_url} alt="Bike" /></figure>
                <div className="card-body">
                    <div>
                        <h2 className="card-title">{model}</h2>
                        <p className='text-lg'>{brand}</p>
                        <div className='mt-3'>
                            <p>used: {used}</p>
                            <p>Condition: {quality}</p>
                            <p>Asking price: Tk {resale_price}</p>
                            <p>Market price: Tk{original_price}</p>
                            <p>Features: {details}</p>
                        </div>
                        <div className='mt-3'>
                            <p className='flex items-center gap-x-1'><FaMale /> {name}</p>
                            <p className='flex items-center gap-x-1'><FaMapMarkerAlt /> {location}</p>
                            <p className='flex items-center gap-x-1'><FaCalendarAlt /> {published_date}</p>
                        </div>
                    </div>
                    <div className="card-actions justify-between mt-5">
                        <label onClick={() => setBookProduct(bike)} htmlFor="booking-modal" className="btn btn-primary font-bold">Book Now</label>
                        <label onClick={handleReport} className="btn btn-outline font-bold">Report Item</label>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CategoryBike;