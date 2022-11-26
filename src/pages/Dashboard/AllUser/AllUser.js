import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllUser = () => {
    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users');
            const data = await res.json();
            return data;
        }
    })
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
                                    <td>{user.activity}</td>
                                    <td>
                                        <button className='btn btn-primary btn-xs'>Make Admin</button>
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