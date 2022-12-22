import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useState } from 'react';
import Category from './Category';

const Categories = () => {
    const [loading, setLoading] = useState(true);

    const { data: categories = [] } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch('https://assignment-12-server-iota.vercel.app/category');
            const data = await res.json();
            setLoading(false);
            return data;
        }
    })

    if (loading) {
        return <div className='flex justify-center'><progress className="progress w-56"></progress></div>;
    }

    return (
        <div className='mt-10'>
            <p className='text-center text-4xl font-bold text-gray-400 divider mx-20'>Category</p>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mx-6 mt-10'>
                {
                    categories.map(category => <Category key={category._id} category={category}></Category>)
                }
            </div>
        </div>
    );
};

export default Categories;