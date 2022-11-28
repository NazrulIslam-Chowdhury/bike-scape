import React, { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import logo from '../../../assets/1da21df8f5b210a1ee3d46aed5c0c0a6-removebg-preview.png';

const Stat = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className=' mt-10'>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={
                        user?.photoURL ?
                            user.photoURL
                            :

                            <img src={logo} alt="" />

                    } className="max-w-sm rounded-full" alt='' />
                    <div>
                        <h1 className="text-5xl font-bold">{
                            user?.displayName ?
                                user.displayName
                                :
                                <p className='text-4xl text-gray-400 font-bold'>Welcome</p>
                        }</h1>
                        <p className="py-6 text-xl font-semibold text-gray-300">{user?.email}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stat;