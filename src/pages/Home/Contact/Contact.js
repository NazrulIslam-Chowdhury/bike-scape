import React from 'react';
import bg from '../../../assets/bike-2.jpg';

const Contact = () => {
    return (
        <div
            style={{
                backgroundImage: `url('${bg}')`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                width: 'auto',
                height: '100dvh'
            }}
            className='relative brightness-95 flex flex-col justify-center'
        >
            <div className='space-y-20 sm:pl-[119px] pl-5'>
                <div className='space-y-10'>
                    <h1 className='text-5xl text-white font-bold'>FREE SERVICE FOR PREMIUM <br /> MEMBERS</h1>
                    <p className='text-xl pr-[60%]'>If someone’s not there to take your call, you can wait and the automated voice will prompt you to leave a message. We will get back to you as soon as possible.</p>
                </div>

                <div className='flex gap-20'>
                    <button className='sm:text-2xl text-xl text-white font-medium bg-red-600 hover:bg-red-800 sm:px-8 px-6 sm:py-3 py-2 uppercase'>contact us</button>
                    <div>
                        <p className='text-lg text-white'>Call Us</p>
                        <p className='text-lg text-white'>(+012) 33 5566 8888</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;