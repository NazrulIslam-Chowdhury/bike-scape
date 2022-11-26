import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
// import toast from 'react-hot-toast';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Navbar from '../../shared/Navbar/Navbar';

const MyOrders = () => {
    const { user } = useContext(AuthContext);
    // const [bookings, setBookings] = useState([]);
    const { data: orders = [] } = useQuery({
        queryKey: ['orders', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/bookings?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    })

    // const deleteOnClick = id => {
    //     const proceed = window.confirm('Are you sure you want to delete this item')
    //     if (proceed) {
    //         fetch(`http://localhost:5000/bookings/${id}`, {
    //             method: 'DELETE'
    //         })
    //             .then(res => res.json())
    //             .then(data => {
    //                 if (data.acknowledged) {
    //                     toast.success('Review deleted successfully');
    //                     const remaining = bookings.filter(book => book._id !== id);
    //                     setBookings(remaining);
    //                 }
    //             })
    //     }

    // }
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
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, i) => <tr key={i} className="hover">
                                <th>{i + 1}</th>
                                <td>{order.model}</td>
                                <td>Tk {order.price}</td>
                                <td>{order.email}</td>
                                <td>{order.number}</td>
                                <td>{order.location}</td>
                                <td>
                                    <button className='btn btn-error btn-xs'>Cancel</button>
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