import React, { useState } from 'react';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import Navbar from '../../shared/Navbar/Navbar';
import BookingModal from './bookingModal/BookingModal';
import CategoryBike from './CategoryBike';

const CategoryBikes = () => {
    const bikes = useLoaderData();
    const [bookProduct, setBookProduct] = useState(null)

    return (
        <div>
            <Navbar></Navbar>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-5 gap-y-8 mt-14 ml-10'>
                {
                    bikes.map((bike, idx) => <CategoryBike key={idx} bike={bike} setBookProduct={setBookProduct}></CategoryBike>)
                }
            </div>
            {
                bookProduct &&
                <BookingModal bookProduct={bookProduct} setBookProduct={setBookProduct}></BookingModal>
            }
            <Link to='/'><button className='btn ml-14 mt-6 flex items-center gap-x-1'><FaArrowAltCircleLeft /> Back</button></Link>
        </div>
    );
};

export default CategoryBikes;