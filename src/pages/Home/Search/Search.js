import React from 'react';

const Search = () => {
    return (
        <div className='space-y-10'>
            <div className='bg-base-200 p-16 space-y-10'>
                <h1 className='text-3xl text-white font-bold uppercase'>find your bike</h1>
                <hr />
                <div className='space-y-5'>
                    <div className='flex lg:flex-row flex-col gap-3'>
                        <input type="text" className='w-full outline-none p-5 placeholder:text-lg' placeholder='All Branch' />
                        <input type="text" className='w-full outline-none p-5 placeholder:text-lg' placeholder='All Make' />
                        <input type="text" className='w-full outline-none p-5 placeholder:text-lg' placeholder='All Model' />
                    </div>
                    <button className='bg-red-600 hover:bg-red-800 px-10 py-4 text-xl text-white font-semibold uppercase'>search</button>
                </div>
            </div>
        </div>
    );
};

export default Search;