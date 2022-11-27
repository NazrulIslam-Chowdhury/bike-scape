import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
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
            const res = await fetch(`http://localhost:5000/bookings?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    })

    const handleCancel = id => {
        const proceed = window.confirm('Are you sure you want to cancel this product');
        if (proceed) {
            fetch(`http://localhost:5000/bookings/${id}`, {
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
                                    <button onClick={() => handleCancel(order._id)} className='btn btn-error btn-xs'>Cancel</button>
                                </td>
                            </tr>)
                        }



                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;