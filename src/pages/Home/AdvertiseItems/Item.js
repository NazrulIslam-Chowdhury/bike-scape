import React from 'react';
import { FaCalendarAlt, FaMale, FaMapMarkerAlt } from 'react-icons/fa';

const Item = ({ item }) => {
    const { name, brand, model, quality, resale_price, original_price, image_url, used, location, published_date, details } = item;
    return (
        <div>
            <div className="hero  bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={image_url} className="h-auto w-auto rounded-lg shadow-2xl" alt='' />
                    <div>
                        <div className='mb-6'>
                            <h1 className="text-5xl font-bold">{model}</h1>
                            <p className='text-2xl font-semibold'>{brand}</p>
                        </div>
                        <p>Used: {used}</p>
                        <p>Quality:{quality}</p>
                        <p>Selling Price: {resale_price}tk</p>
                        <p>Original Price: {original_price}tk</p>
                        <p className="py-6">Product Detail: {details}</p>
                        <p className='flex items-center'> <FaMapMarkerAlt />{location}</p>
                        <p className='flex items-center'><FaMale /> {name}</p>
                        <p className='flex items-center gap-x-2'>
                            <FaCalendarAlt />  {published_date}</p>
                        <button className="btn btn-primary mt-6 font-bold">Buy</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Item;