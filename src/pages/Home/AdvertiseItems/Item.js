import React from 'react';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { FaMotorcycle } from 'react-icons/fa';
import { GrStackOverflow } from 'react-icons/gr';

const Item = ({ item }) => {
    const { name, brand, model, quality, resale_price, original_price, image_url, used, location, published_date, details } = item;
    return (
        <div>
            <div className="bg-neutral">
                <div className="flex flex-col gap-4 p-7">
                    <div>
                        <h1 className="text-3xl font-bold">{model}</h1>
                        <p>By <span className='text-lg text-red-600 font-medium'>{name}</span></p>
                    </div>
                    <img src={image_url} className="h-[300px] w-auto shadow-2xl object-cover" alt={model} />
                    <div>
                        <div className='flex justify-between'>
                            <div className='flex gap-2'>
                                <FaMotorcycle className='text-red-600 w-7 h-7' />
                                <div>
                                    <h3 className=' text-xl font-semibold'>{brand}</h3>
                                    <p>Make</p>
                                </div>
                            </div>
                            <div className='flex gap-2'>
                                <GrStackOverflow className='text-red-600 w-6 h-6' />
                                <div>
                                    <h3 className="text-xl font-bold">{model}</h3>
                                    <p>Model</p>
                                </div>
                            </div>
                        </div>

                        <div className='flex justify-between mt-4'>

                            <div className='flex gap-2'>
                                <FaCalendarAlt className='text-red-600 w-6 h-6' />
                                <div>
                                    <h3 className="text-xl font-bold">{published_date}</h3>
                                    <p>Registration Year</p>
                                </div>
                            </div>

                            <div className='flex gap-2'>
                                <FaMapMarkerAlt className='text-red-600 w-7 h-7' />
                                <div>
                                    <h4 className=''> {location}</h4>
                                    <p>Location</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <p className='mt-4'><span className='text-red-600 text-lg font-medium'>Product Detail</span> : {details}</p>
                        </div>

                        <div className='mt-4'>
                            <div className='flex justify-between'>
                                <p><span className='text-red-600 text-lg font-medium'>Used</span> : {used}</p>
                                <p><span className='text-red-600 text-lg font-medium'>Quality</span> : {quality}</p>
                            </div>
                            <div className='flex justify-between'>
                                <p><span className='text-red-600 text-lg font-medium'>Selling Price</span> : {resale_price}tk</p>
                                <p><span className='text-red-600 text-lg font-medium'>Market Price</span> : {original_price}tk</p>
                            </div>
                        </div>
                        <hr className='mt-4' />
                        <div className='mt-4'>
                            <Link to=''>
                                <button className="text-lg bg-red-600 hover:bg-red-800 px-8 py-2 font-bold">Buy</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Item;