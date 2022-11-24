import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Item from './Item';

const AdvertiseItems = () => {
    const { data: advertiseItems = [] } = useQuery({
        queryKey: ['advertiseItems'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/advertise');
            const data = await res.json();
            return data;
        }
    })
    return (
        <div className='space-y-10'>
            {
                advertiseItems.map(item => <Item key={item._id} item={item}></Item>)
            }
        </div>
    );
};

export default AdvertiseItems;