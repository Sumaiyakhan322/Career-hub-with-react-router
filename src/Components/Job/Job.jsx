import React from 'react';
import {IoLocationOutline,IoFitnessOutline } from "react-icons/io5";

const Job = ({job}) => {
    return (
        <div className='space-y-4 border-black border rounded-lg p-10'>
            <img src={job.logo} alt="" />
            <h1>{job.job_title}</h1>
            <p>{job.company_name}</p>
            <div className='flex gap-8'>
                <h1 className='p-4 border rounded-lg border-black'>{job.remote_or_onsite}</h1>
                <h1 className='p-4 border rounded-lg border-black'>{job.job_type}</h1>
            </div>
          <div className='flex gap-10'>
          <div className='flex gap-3 items-center'>
                <IoLocationOutline className='text-3xl'></IoLocationOutline>
                <p>{job.location}</p>
            </div>
            <div className='flex gap-3 items-center'>
                <IoFitnessOutline className='text-3xl'></IoFitnessOutline>
                <p>Salary:{job.salary}</p>
            </div>
          </div>
               <button className='bg-gradient-to-r from-indigo-300 to-pink-400 px-6 py-3 rounded-lg'>Get started</button>
         
        </div>
    );
};

export default Job;