import React, { useEffect, useState } from 'react';
import Job from '../Job/Job';

const FeaturedJobs = () => {
    const [jobs,setjobs]=useState([]);
    const[datalength,setdataLength]=useState(4);
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
      <div className='grid grid-cols-2 gap-10 mt-16'>
      {
            jobs.slice(0,datalength).map(job=><Job key={job.id} job={job}></Job>)
        }
      </div>
      <div>
        <div className={
            datalength===jobs.length && 'hidden'}>
                 <button onClick={()=>setdataLength(6)} className='bg-gradient-to-r from-indigo-300 to-pink-400 px-6 py-3 rounded-lg my-10 block mx-auto' 
         >Show all</button>
            </div>
       
      </div>
        </>
    );
};

export default FeaturedJobs;