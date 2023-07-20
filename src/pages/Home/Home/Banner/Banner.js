import React from 'react';
import video from '../../../../assets/video/video.mp4';
import Navbar from '../../../../shared/Navbar/Navbar';


const Banner = () => {
    return (
        <section className='relative'>
            <div className='fixed z-10 w-full'>
                <Navbar />
            </div>
            <video
                src={video}
                autoPlay
                loop
                muted
                className='w-full h-[100dvh] object-cover brightness-75 m-0 p-0'
            />
            <div className='absolute space-y-10 sm:top-64 top-40 sm:left-20 left-8 pr-20'>
                <div className='space-y-1'>
                    <h5 className='text-red-600 text-lg font-medium uppercase'>Welcome to bikescape</h5>
                    <h1 className='text-5xl text-white font-bold uppercase'>Great performance that matters in future</h1>
                </div>
                <p className='text-lg sm:pr-[50%]'>Feel and enjoy the torque delivered by this boxer with every twist of your wrist. With core screen sport, you now have this sportiness - in the truest sense of the word - at your fingertips.</p>
                <button className='bg-red-600 hover:bg-red-800 px-6 py-2 text-xl font-semibold uppercase'>learn more</button>
            </div>
        </section>
    );
};

export default Banner;