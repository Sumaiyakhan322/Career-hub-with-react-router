import React from 'react';

const Footer = () => {
    return (
        <div className=' bg-base-200 text-base-content mt-10 p-10'>
            <footer className="footer max-w-6xl mx-auto ">
  <div className='w-5/6'>
  <p className='text-5xl font-bold'>Career Club</p>
  <p>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
  </div>
  <nav>
    <header className="footer-title">Services</header> 
    <a className="link link-hover">Branding</a> 
    <a className="link link-hover">Design</a> 
    <a className="link link-hover">Marketing</a> 
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav>
    <header className="footer-title">Company</header> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <header className="footer-title">Legal</header> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
        </div>
    );
};

export default Footer;