import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ category }) => {
    const { category_name, img } = category;

    return (
        <Link to={`/category-bikes/${category._id}`} className=''>
            <div className='w-[400px] h-[500px] border-[1px] border-solid border-black overflow-hidden relative group'>
                <img
                    src={img}
                    alt={category_name}
                    loading='lazy'
                    className='w-full h-full hover:-translate-y-24 delay-200 transition-transform duration-[1s] cursor-pointer absolute object-cover'
                />

                <div className='flex flex-col items-start absolute bottom-0 p-10'>
                    <h1
                        className='text-white hover:text-red-600 text-4xl font-bold group-hover:text-red-600'>
                        {category_name}</h1>
                </div>
            </div>
        </Link>
    );
};

export default Category;