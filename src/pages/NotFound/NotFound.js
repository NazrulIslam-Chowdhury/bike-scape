import React from 'react';
import img from '../../assets/PuXipAW3AXUzUJ4uYyxPKC-1200-80.jpg';
import Navbar from '../../shared/Navbar/Navbar';

const NotFound = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='mt-10'>
                <img className='h-screen w-screen' src={img} alt="404" />
            </div>
        </div>
    );
};

export default NotFound;