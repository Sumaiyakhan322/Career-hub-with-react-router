import React from 'react';

const Banner = () => {
    return (
        <div className='bg-sky-100-200'>
        <div className='max-w-6xl mx-auto'>
            <div className='flex md:flex-row flex-col justify-between items-center mt-20'>
               <div className='space-y-3'>
               <h1 className='md:text-6xl text-2xl font-bold '>One Step Closer To Your Dream Job</h1>
               <p className='text-lg'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
               <button className='bg-gradient-to-r from-indigo-500 to-pink-500 px-6 py-3 rounded-lg'>Get started</button>
               </div>
               <img src="../user.png" alt="" className='w-[800px] h-[700px]' />
               

            </div>
        </div>
        </div>
    );
};

export default Banner;