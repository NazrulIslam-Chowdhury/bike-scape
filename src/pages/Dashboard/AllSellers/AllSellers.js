import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllSellers = () => {
    const { data: sellers = [], refetch } = useQuery({
        queryKey: ['sellers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users/all-sellers');
            const data = await res.json();
            return data;
        }
    })

    const handleDelete = id => {
        fetch(`http://localhost:5000/users/all-sellers/${id}`, {
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
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Activity</th>
                            <th>Verify</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            sellers.map((seller, i) =>
                                <tr key={seller._id} className="hover">
                                    <th>{i + 1}</th>
                                    <td>{seller.displayName}</td>
                                    <td>{seller.email}</td>
                                    <td>{seller.activity}</td>
                                    <td>
                                        <button className='btn btn-primary btn-xs'>Verify</button>
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