import React, { useContext, useState } from 'react';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import Navbar from '../../shared/Navbar/Navbar';
import BookingModal from './bookingModal/BookingModal';
import CategoryBike from './CategoryBike';

const CategoryBikes = () => {
    const { isLoading } = useContext(AuthContext);
    const bikes = useLoaderData();
    const [bookProduct, setBookProduct] = useState(null);
    useTitle('Category Bikes');

    if (isLoading) {
        return <div className='flex justify-center'><progress className="progress w-56"></progress></div>;
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mt-14 mx-6'>
                {
                    bikes.map((bike, idx) => <CategoryBike key={idx} bike={bike} setBookProduct={setBookProduct}></CategoryBike>)
                }
            </div>
            {
                bookProduct &&
                <BookingModal bookProduct={bookProduct} setBookProduct={setBookProduct}></BookingModal>
            }
            <Link to='/'><button className='btn ml-6 mt-10 flex items-center gap-x-1 shadow-lg shadow-black'><FaArrowAltCircleLeft /> Back</button></Link>
        </div>
    );
};

export default CategoryBikes;