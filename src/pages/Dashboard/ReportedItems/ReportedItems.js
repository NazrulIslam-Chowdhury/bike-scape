import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import useTitle from '../../../hooks/useTitle';

const ReportedItems = () => {
    const [loading, setLoading] = useState(true);
    useTitle('Dashboard/Reported Items');
    const { data: items = [], refetch } = useQuery({
        queryKey: ['items'],
        queryFn: async () => {
            const res = await fetch('https://assignment-12-server-iota.vercel.app/report-items');
            const data = await res.json();
            setLoading(false);
            return data;
        }
    })

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure you want to delete this reported item');
        if (proceed) {
            fetch(`https://assignment-12-server-iota.vercel.app/report-items/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        toast.success('Item deleted successfully');
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
            <p className='text-2xl font-semibold font-serif text-center divider'>Reported Items</p>
            <div className="overflow-x-auto mt-6">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Model</th>
                            <th>Brand</th>
                            <th>Price</th>
                            <th>Published By</th>
                            <th>Publish Date</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items.map((item, i) =>
                                <tr key={item._id} className="hover">
                                    <th>{i + 1}</th>
                                    <td>{item.model}</td>
                                    <td>{item.brand}</td>
                                    <td>Tk {item.resale_price}</td>
                                    <td>{item.name}</td>
                                    <td>{item.published_date}</td>
                                    <td>
                                        <button onClick={() => handleDelete(item._id)} className='btn btn-error btn-xs'>Delete</button>
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

export default ReportedItems;