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
                <figure className='h-80 w-[469px] overflow-hidden'>
                    <img
                        className='h-full w-full hover:scale-125 duration-[2s] transition-transform object-cover'
                        src={image_url}
                        alt="Bike"
                        loading='lazy' />
                </figure>
                <div className="card-body">
                    <div>
                        <h2 className="card-title text-3xl">{model}</h2>
                        <p className='text-xl'>{brand}</p>
                        <div className='mt-3'>
                            <p className='text-lg'>used: {used}</p>
                            <p className='text-lg'>Condition: {quality}</p>
                            <p className='text-lg'>Asking price: Tk {resale_price}</p>
                            <p className='text-lg'>Market price: Tk{original_price}</p>
                            <p className='text-lg'>Features: {details}</p>
                        </div>
                        <div className='mt-3'>
                            <p className='flex items-center gap-x-1 text-lg'><FaMale className='text-red-600 w-4 h-4' /> {name}</p>
                            <p className='flex items-center gap-x-1 text-lg'><FaMapMarkerAlt className='text-red-600 w-4 h-4' /> {location}</p>
                            <p className='flex items-center gap-x-1 text-lg'><FaCalendarAlt className='text-red-600 w-4 h-4' /> {published_date}</p>
                        </div>
                    </div>
                    <div className="card-actions justify-between mt-5 items-center">
                        <label onClick={() => setBookProduct(bike)} htmlFor="booking-modal" className="bg-red-600 hover:bg-red-800 px-6 py-3 text-lg font-bold uppercase cursor-pointer">Book Now</label>
                        <label onClick={handleReport} className="btn-outline btn text-white text-lg font-bold uppercase cursor-pointer">Report Item</label>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CategoryBike;