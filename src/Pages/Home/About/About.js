import React from 'react';
import parts from "../../../assets/images/about_us/parts.jpg";
import person from "../../../assets/images/about_us/person.jpg";
const About = () => {
    return (
        <div className=' pt-10'>
        <p className="text-2xl font-bold text-center text-orange-600 max-sm:block md:hidden xl:hidden">About Us</p>
            <div className="hero mb-20">
              
  <div className="hero-content flex-col lg:flex-row sm:p-0">
    <div className='relative lg:w-1/2 md:w-4/5 sm:w-4/5'>
    <img src={person} className="w-4/5 h-full rounded-lg shadow-2xl" alt='pic' />
    <img src={parts} className="absolute right-2 top-1/2 w-3/5 border-8 rounded-lg shadow-2xl" alt='pic' />
    </div>
    <div className='lg:w-1/2 md:w-4/5 sm:w-4/5 md:mt-10'>
        <p className="text-2xl font-bold text-orange-600 max-sm:hidden md:block xl:block ">About Us</p>
      <h1 className="my-5 lg:text-5xl md:text-4xl font-bold max-sm:hidden md:block xl:block ">
        We are qualified <br /> 
        and experienced <br />
        in this field since 1992</h1>
        <p className="py-3 max-sm:mt-16">
        <span className='uppercase font-bold text-2xl'>Welcome!</span> to Invent Tailors and Fabrics, where we strive to provide exceptional products and services to our customers.
        </p>
        <p className="py-3">
        At Invent Tailors and Fabrics, we are dedicated to delivering innovative solutions that meet the evolving needs of our clients. Our team is comprised of highly skilled professionals who bring a wealth of expertise and knowledge to each orders.
        </p>
        <p className="py-3 font-semibold">
        Customer satisfaction is our most prioritized goal.
        </p>
      <button className="btn bg-gradient-to-b from-blue-100 via-blue-300 to-blue-500 text-base-content text-white border-0">Get more info</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default About;