import React, { useEffect, useState } from 'react';
import Job from '../Job/Job';

const FeaturedJobs = () => {
    const [jobs,setjobs]=useState([]);
    useEffect(()=>{
        fetch('../jobs.json')
        .then(res=>res.json())
        .then(data=>setjobs(data))
    },[])
    return (
        <>
        <div>
            <h1 className='text-5xl font-bold text-center mb-4'>Job Category List</h1>
           <p className='text-2xl text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p> 
          
        </div>
        {
            jobs.map(job=><Job key={job.id} job={job}></Job>)
        }
        </>
    );
};

export default FeaturedJobs;