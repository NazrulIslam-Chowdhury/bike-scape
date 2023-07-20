import React from 'react';
import { blogs } from '../../../constants';

const Blog = () => {
    return (
        <div className='bg-base-200 py-20 space-y-10'>
            <div className='sm:pl-[119px] pl-5 space-y-5 '>
                <h3 className='bg-red-600 text-white text-lg font-medium px-4 py-2 inline-block uppercase'>our blog</h3>
                <h1 className='text-white text-5xl font-bold uppercase'>latest news</h1>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-1 grid-cols-1 gap-5 sm:px-[119px] px-5 place-items-start'>
                {
                    blogs.map((blog, idx) => (
                        <div key={idx} className='space-y-5'>
                            <div className='w-auto h-[276px] overflow-hidden'>
                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    className='hover:scale-125 duration-[2s] transition-transform'
                                />
                            </div>
                            <div className='space-y-5'>
                                <div className='flex items-center gap-5'>
                                    <h6>{blog.date}</h6>
                                    <span>-</span>
                                    <h5 className='text-lg font-medium text-white'>by {blog.author}</h5>
                                </div>
                                <h3 className='text-2xl text-white font-semibold'>{blog.title}</h3>
                                <p>{blog.detail}</p>
                                <button className='text-white text-xl font-semibold bg-red-600 hover:bg-red-800 px-8 py-3'>Read more</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Blog;