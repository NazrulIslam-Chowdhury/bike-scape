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
        <div className='space-y-10'>
            {
                advertiseItems.map(item => <Item key={item._id} item={item}></Item>)
            }
        </div>
    );
};

export default AdvertiseItems;