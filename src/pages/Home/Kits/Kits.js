import React from 'react';
import { kits } from '../../../constants';
import { AiFillStar, AiOutlineHeart, AiOutlineEye } from 'react-icons/ai';

const Kits = () => {
    return (
        <div className='py-20 space-y-10'>
            <div className='sm:pl-[119px] pl-5 space-y-5 '>
                <h3 className='bg-red-600 text-white text-lg font-medium px-4 py-2 inline-block uppercase'>Shop Online</h3>
                <h1 className='text-white text-5xl font-bold uppercase'>our products</h1>
            </div>

            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 sm:px-[119px] px-5 place-items-center place-content-center'>
                {
                    kits.map((kit, idx) => (
                        <div className='space-y-5' key={idx}>
                            <div className='group'>
                                <div className='relative overflow-hidden'>
                                    <img
                                        src={kit.image}
                                        alt={kit.Model}
                                        loading='lazy'
                                    />
                                    <div className='absolute h-full w-full -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer'>
                                        <div className='absolute flex flex-col gap-5 right-2 top-2 '>
                                            <AiOutlineHeart className='w-5 h-5 cursor-pointer text-red-600' />
                                            <AiOutlineEye className='w-5 h-5 cursor-pointer' />
                                        </div>
                                        <h3 className='absolute bottom-0 bg-red-600 hover:bg-red-800 w-full text-center text-xl text-white font-semibold py-4 cursor-pointer'>Buy now</h3>
                                    </div>
                                </div>

                            </div>
                            <div className='flex flex-col items-center gap-5 pb-5'>
                                <h6 className='text-xl font-semibold'>{kit.type}</h6>
                                <h3 className='text-2xl text-white font-bold'>{kit.Model}</h3>
                                {
                                    kit.rating === '5' ?
                                        <div className='flex gap-4'>
                                            <AiFillStar className='w-5 h-5 text-amber-400' />
                                            <AiFillStar className='w-5 h-5 text-amber-400' />
                                            <AiFillStar className='w-5 h-5 text-amber-400' />
                                            <AiFillStar className='w-5 h-5 text-amber-400' />
                                            <AiFillStar className='w-5 h-5 text-amber-400' />
                                        </div>
                                        :
                                        <div className='flex gap-4'>
                                            <AiFillStar className='w-5 h-5 text-amber-400' />
                                            <AiFillStar className='w-5 h-5 text-amber-400' />
                                            <AiFillStar className='w-5 h-5 text-amber-400' />
                                            <AiFillStar className='w-5 h-5 text-amber-400' />
                                            <AiFillStar className='w-5 h-5 text-gray-400' />
                                        </div>
                                }
                                <h3 className='text-red-600 text-xl font-semibold'>{kit.price}</h3>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Kits;