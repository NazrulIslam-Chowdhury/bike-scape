import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { FaUserAlt } from 'react-icons/fa';
import useTitle from '../../../hooks/useTitle';

const AllUser = () => {
    const [loading, setLoading] = useState(true);
    useTitle('Dashboard/All User');
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://assignment-12-server-iota.vercel.app/users');
            const data = await res.json();
            setLoading(false);
            return data;
        }
    });

    const handleMakeAdmin = id => {
        fetch(`https://assignment-12-server-iota.vercel.app/users/admin/${id}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.modifiedCount > 0) {
                    toast.success('Admin created successfully');
                    refetch();
                }
            })
    }

    if (loading) {
        return <div className='flex justify-center'><progress className="progress w-56"></progress></div>;
    }
    return (
        <div>
            <p className='text-2xl font-semibold font-serif text-center divider'>All User</p>
            <div className="overflow-x-auto mt-6">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Activity</th>
                            <th>Make Admin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, i) =>
                                <tr key={user._id} className="hover">
                                    <th>{i + 1}</th>
                                    <th>
                                        <div className="avatar">
                                            <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                                <img src={
                                                    user?.photoURL ?
                                                        user.photoURL
                                                        :
                                                        <FaUserAlt />
                                                } alt='' />
                                            </div>
                                        </div>
                                    </th>
                                    <td>{user.displayName}</td>
                                    <td>{user.email}</td>
                                    <td>{
                                        user.activity ?
                                            user.activity
                                            :
                                            user.role
                                    }</td>
                                    <td>
                                        {
                                            user?.role !== 'Admin' ?

                                                <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-primary btn-xs'>Make Admin</button>
                                                :
                                                <button className='btn btn-success btn-xs'>Admin</button>
                                        }
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

export default AllUser;