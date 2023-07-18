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
        <div className='py-20 space-y-20'>
            <div className='sm:pl-[119px] pl-5 space-y-5 '>
                <h3 className='bg-red-600 text-white text-lg font-medium px-4 py-2 inline-block uppercase'>Our Categories</h3>
                <h1 className='text-white text-6xl font-bold uppercase'>Inventory Types</h1>
            </div>
            <div className='flex gap-10 flex-wrap justify-center'>
                {
                    categories.map(category => <Category key={category._id} category={category}></Category>)
                }
            </div>
        </div>
    );
};

export default Categories;