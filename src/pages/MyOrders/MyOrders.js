import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
// import toast from 'react-hot-toast';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import Navbar from '../../shared/Navbar/Navbar';

const MyOrders = () => {
    const { user } = useContext(AuthContext);
    useTitle('My Orders');
    // const [bookings, setBookings] = useState([]);
    const { data: orders = [], refetch } = useQuery({
        queryKey: ['orders', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://assignment-12-server-iota.vercel.app/bookings?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    })

    const handleCancel = id => {
        const proceed = window.confirm('Are you sure you want to cancel this product');
        if (proceed) {
            fetch(`https://assignment-12-server-iota.vercel.app/bookings/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    if (data.acknowledged) {
                        toast.success('Order cancel successfully');
                        refetch();
                    }
                })
        }
    }
    return (
        <div>
            <Navbar></Navbar>
            {
                orders.length ?
                    <div className="overflow-x-auto mt-10">
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Model</th>
                                    <th>Price</th>
                                    <th>Email</th>
                                    <th>Mobile</th>
                                    <th>Location</th>
                                    <th>Confirm Order</th>
                                    <th>Cancel Order</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    orders.map((order, i) => <tr key={order._id} className="hover">
                                        <th>{i + 1}</th>
                                        <td>{order.model}</td>
                                        <td>Tk {order.price}</td>
                                        <td>{order.email}</td>
                                        <td>{order.number}</td>
                                        <td>{order.location}</td>
                                        <td>
                                            {
                                                order.price && !order.paid &&
                                                <Link to={`/orders-payment/${order._id}`}>
                                                    <button className='btn btn-primary btn-xs'>Pay</button>
                                                </Link>
                                            }
                                            {
                                                order.price && order.paid &&
                                                <span className='text-primary'>Paid</span>
                                            }
                                        </td>
                                        <td>
                                            <button onClick={() => handleCancel(order._id)} className='btn btn-error btn-xs'>Cancel</button>
                                        </td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                    :
                    <div className="divider mt-10 text-2xl text-center text-gray-400">Please buy a product</div>
            }
        </div>
    );
};

export default MyOrders;