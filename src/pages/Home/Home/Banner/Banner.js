import React from 'react';
import Navbar from '../../../../shared/Navbar/Navbar';
import logo from '../../../../assets/1da21df8f5b210a1ee3d46aed5c0c0a6-removebg-preview.png';

const Banner = () => {
    return (
        <section>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <div className='absolute w-full'>
                        <Navbar></Navbar>
                        <hr className='mx-48 mt-10' />
                    </div>
                    <img src="https://i.pinimg.com/originals/88/35/a9/8835a9d711eed8cf04b96142a48fdebf.jpg" className="w-full h-min" alt='' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                    <div className='absolute  left-64'>
                        <img src={logo} alt="" />
                        <p className='text-4xl text-gray-200'>fjfjfjfj</p>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://wallpohub.com/wp-content/uploads/2022/07/Red-Stylish-Bike-Wallpaper-for-Background-Image-Picture-4k-Hd-3840x2160-for-Laptop-Pc-Computer-Mac-Desktop-1-2048x1152.jpg" className="w-full" alt='' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://placeimg.com/800/200/arch" className="w-full" alt='' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;