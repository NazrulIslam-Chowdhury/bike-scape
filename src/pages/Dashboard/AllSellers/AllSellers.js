import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import { FaUserAlt } from 'react-icons/fa';
import useTitle from '../../../hooks/useTitle';

const AllSellers = () => {
    useTitle('/Dashboard/All Seller');
    const { data: sellers = [], refetch } = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            const res = await fetch('https://assignment-12-server-iota.vercel.app/users/all-sellers');
            const data = await res.json();
            return data;
        }
    })

    const handleDelete = id => {

        const proceed = window.confirm('Are you sure you want delete this seller');
        if (proceed) {
            fetch(`https://assignment-12-server-iota.vercel.app/users/all-sellers/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    if (data.acknowledged) {
                        toast.success('Seller deleted successfully');
                        refetch();
                    }
                })
        }

    }

    const handleVerify = id => {
        fetch(`https://assignment-12-server-iota.vercel.app/users/verify-seller/${id}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.acknowledged) {
                    toast.success('Seller verified successfully');
                    refetch();
                }
            })
    }
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Activity</th>
                            <th>Status</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            sellers.map((seller, i) =>
                                <tr key={seller._id} className="hover">
                                    <th>{i + 1}</th>
                                    <th>
                                        <div className="avatar">
                                            <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                                <img src={
                                                    seller?.photoURL ?
                                                        seller.photoURL
                                                        :
                                                        <FaUserAlt />
                                                } alt='' />
                                            </div>
                                        </div>
                                    </th>
                                    <td>{seller.displayName}</td>
                                    <td>{seller.email}</td>
                                    <td>{seller.activity}</td>
                                    <td>
                                        {
                                            seller?.verify === true ?
                                                <p className='btn btn-primary btn-xs'>Verified</p>
                                                :
                                                <button onClick={() => handleVerify(seller._id)} className='btn btn-primary btn-xs'>Verify</button>
                                        }
                                    </td>
                                    <td>
                                        <button onClick={() => handleDelete(seller._id)} className='btn btn-error btn-xs'>Delete</button>
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

export default AllSellers;