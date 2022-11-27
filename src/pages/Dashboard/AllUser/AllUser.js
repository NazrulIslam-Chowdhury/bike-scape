import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import useTitle from '../../../hooks/useTitle';

const AllUser = () => {
    useTitle('Dashboard/All User');
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users');
            const data = await res.json();
            return data;
        }
    });

    const handleMakeAdmin = id => {
        fetch(`http://localhost:5000/users/admin/${id}`, {
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
                            <th>Make Admin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, i) =>
                                <tr key={user._id} className="hover">
                                    <th>{i + 1}</th>
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