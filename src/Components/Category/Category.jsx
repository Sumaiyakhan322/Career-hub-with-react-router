import React from 'react';

const Category = () => {
    return (
        <div className='my-20'>
           <h1 className='text-5xl font-bold text-center mb-4'>Job Category List</h1>
           <p className='text-2xl text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p> 
           <div className='grid grid-cols-2 md:grid-cols-4 mt-10 gap-6'>
            <div className='bg-purple-100 space-y-2 p-8 rounded-lg'>
                <img src="../chip.png" alt="" />
                <h1 className='text-2xl font-bold mt-5'>Account & Finance</h1>
                <p className=''>300 Jobs Available</p>
            </div>
            <div className='bg-purple-100 space-y-2 p-8 rounded-lg'>
                <img src="../chip.png" alt="" />
                <h1 className='text-2xl font-bold mt-5'>Account & Finance</h1>
                <p className=''>300 Jobs Available</p>
            </div>
            <div className='bg-purple-100 space-y-2 p-8 rounded-lg'>
                <img src="../chip.png" alt="" />
                <h1 className='text-2xl font-bold mt-5'>Account & Finance</h1>
                <p className=''>300 Jobs Available</p>
            </div>
            <div className='bg-purple-100 space-y-2 p-8 rounded-lg'>
                <img src="../chip.png" alt="" />
                <h1 className='text-2xl font-bold mt-5'>Account & Finance</h1>
                <p className=''>300 Jobs Available</p>
            </div>
           </div>
        </div>
    );
};

export default Category;