import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Navbar from '../../shared/Navbar/Navbar';
import CategoryBike from './CategoryBike';

const CategoryBikes = () => {
    const bikes = useLoaderData();
    // console.log(bikes.products);
    const { products } = bikes;

    return (
        <div>
            <Navbar></Navbar>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-5 gap-y-8 mt-14 ml-10'>
                {
                    products.map((product, idx) => <CategoryBike key={idx} product={product}></CategoryBike>)
                }
            </div>
        </div>
    );
};

export default CategoryBikes;