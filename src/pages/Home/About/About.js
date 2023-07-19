import React from 'react';
import ReactPlayer from 'react-player/lazy';
import bg from '../../../assets/bike-1.jpg';
import { Parallax } from 'react-parallax';

const About = () => {
    return (
        <div className='space-y-20'>
            <div className='grid sm:grid-cols-2 grid-rows-1 gap-10 pr-20 place-items-center'>
                <div className='sm:pl-[119px] pl-5 space-y-5 '>
                    <h3 className='bg-red-600 text-white text-lg font-medium px-4 py-2 inline-block uppercase'>welcome to bikescape</h3>
                    <h1 className='text-white text-5xl font-bold'>HELPS YOU TO FIND YOUR NEXT MOTORBIKE EASILY</h1>
                </div>
                <p className='sm:pl-[119px] pl-5'>Whether offering organized motorcycling trips to the most beautiful places in the world, or training on world championship circuits: BMW is your starting point for unique motorcycling experiences. On the other side of the world or right outside your front door. Always passionate, inspiring and outstanding in quality and service – just like you expect from BMW. Get ready to explore endless possibilities.</p>
            </div>

            <Parallax
                bgImage={bg}
                strength={600}
                className='w-auto h-[100vh] relative'
            >
                <div className='flex justify-center absolute top-32 left-40'>
                    <ReactPlayer
                        url='https://www.youtube.com/watch?v=aTJxpFCsvW4'
                        controls={true}
                        light
                        volume={1}
                        width={1200}
                        height={450}
                    />
                </div>
            </Parallax>
        </div>
    );
};

export default About;