import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useState } from 'react';
import Item from './Item';

const AdvertiseItems = () => {
    const [loading, setLoading] = useState(true);
    const { data: advertiseItems = [] } = useQuery({
        queryKey: ['advertiseItems'],
        queryFn: async () => {
            const res = await fetch('https://assignment-12-server-iota.vercel.app/advertise');
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
                <h3 className='bg-red-600 text-white text-lg font-medium px-4 py-2 inline-block uppercase'>Featured Bike</h3>
                <h1 className='text-white text-5xl font-bold uppercase'>latest motorbikes</h1>
            </div>
            <div className='flex lg:flex-row md:flex-col flex-col gap-10 items-center justify-center px-[119px]'>
                {
                    advertiseItems.map(item => <Item key={item._id} item={item}></Item>)
                }
            </div>
        </div>
    );
};

export default AdvertiseItems;