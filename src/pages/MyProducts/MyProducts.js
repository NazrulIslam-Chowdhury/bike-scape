import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Navbar from '../../shared/Navbar/Navbar';

const MyProducts = () => {
    const { user } = useContext(AuthContext);
    const { data: products = [], refetch } = useQuery({
        queryKey: ['products', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/bikes?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    })

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure you want to delete your product');
        if (proceed) {
            fetch(`http://localhost:5000/bikes/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        toast.success('You product deleted successfully');
                        refetch();
                    }
                })
        }
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className='mt-10'>
                <div className="overflow-x-auto mt-10">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Model</th>
                                <th>Brand</th>
                                <th>Price</th>
                                <th>Email</th>
                                <th>Location</th>
                                <th>Status</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.map((product, i) => <tr key={product._id} className="hover">
                                    <th>{i + 1}</th>
                                    <td>{product.name}</td>
                                    <td>{product.model}</td>
                                    <td>{product.brand}</td>
                                    <td>Tk {product.resale_price}</td>
                                    <td>{product.email}</td>
                                    <td>{product.location}</td>
                                    <td>
                                        <button className='btn btn-primary btn-xs'>Available</button>
                                    </td>
                                    <td>
                                        <button onClick={() => handleDelete(product._id)} className='btn btn-error btn-xs'>Delete</button>
                                    </td>
                                </tr>)
                            }



                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyProducts;