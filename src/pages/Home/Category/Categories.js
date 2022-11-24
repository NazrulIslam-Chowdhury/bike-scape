import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Category from './Category';

const Categories = () => {
    const { data: categories = [] } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/category');
            const data = await res.json();
            return data;
        }
    })

    return (
        <div className='mt-6'>
            <p className='text-center text-4xl font-bold text-gray-400'>Category</p>
            <hr className='mx-48 mt-4' />
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1s gap-6 ml-16 mt-6'>
                {
                    categories.map(category => <Category key={category._id} category={category}></Category>)
                }
            </div>
        </div>
    );
};

export default Categories;