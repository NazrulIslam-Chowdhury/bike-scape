import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { FaUserAlt } from 'react-icons/fa';
import useTitle from '../../../hooks/useTitle';

const AllBuyers = () => {
    const [loading, setLoading] = useState(true);
    useTitle('Dashboard/All Buyer');

    const { data: buyers = [], refetch } = useQuery({
        queryKey: ['buyers'],
        queryFn: async () => {
            const res = await fetch('https://assignment-12-server-iota.vercel.app/users/all-buyers');
            const data = await res.json();
            setLoading(false);
            return data;
        }
    })

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure you want delete this buyer');
        if (proceed) {
            fetch(`https://assignment-12-server-iota.vercel.app/users/all-buyers/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.acknowledged) {
                        toast.success('Buyer deleted successfully');
                        refetch();
                    }
                })
        }

    }

    if (loading) {
        return <div className='flex justify-center'><progress className="progress w-56"></progress></div>;
    }

    return (
        <div>
            <p className='text-2xl font-semibold font-serif text-center divider'>All Buyer</p>
            <div className="overflow-x-auto mt-6">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Activity</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            buyers.map((buyer, i) =>
                                <tr key={buyer._id} className="hover">
                                    <th>{i + 1}</th>
                                    <th>
                                        <div className="avatar">
                                            <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                                <img src={
                                                    buyer?.photoURL ?
                                                        buyer.photoURL
                                                        :
                                                        <FaUserAlt />
                                                } alt='' />
                                            </div>
                                        </div>
                                    </th>
                                    <td>{buyer.displayName}</td>
                                    <td>{buyer.email}</td>
                                    <td>{buyer.activity}</td>
                                    <td>
                                        <button onClick={() => handleDelete(buyer._id)} className='btn btn-error btn-xs'>Delete</button>
                                    </td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBuyers;