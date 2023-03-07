import React from "react";
import { FiPhoneCall } from 'react-icons/fi';
import { MdLocationPin } from 'react-icons/md';
import { SlCalender } from 'react-icons/sl';
const Address = () => {
  return (
    <div className="flex items-center justify-center ">
      <div className="grid grid-rows-3 content-center mt-10 w-4/5 md:w-full max-sm:hidden md:block xl:block bg-base-200 shadow-xl border-0 rounded-xl">
        
        <div className="card w-4/5 md:w-full bg-gradient-to-b from-blue-100 via-blue-300 to-blue-500 text-base-content text-white shadow-xl py-5">
      <div className="card-body grid grid-cols-3 gap-1 content-center">
        <div className="flex justify-center items-center">
        <SlCalender className="mx-4" size='2rem'/>
        <div>
        <p className="font-bold">we are open 7 days</p>
        <p className="font-bold text-lg">9:00 am - 9:00 pm</p>
        {/* <span className="font-bold text-sm">Namaz Break on Friday</span> */}
        </div>
        </div>
        
        <div className="flex justify-center items-center">
        <FiPhoneCall className="mx-4" size='2rem'/>
        <div>
        <p className="font-bold text-sm">Have a question?</p>
        <p className="font-bold text-lg hover:text-blue-600 "><a href="tel:+8801711453086">+8801711453086</a></p>
        </div>
        </div>
        
        <div className="flex justify-center items-center">
        <MdLocationPin className="mx-4" size='2rem'/>
        <div>
       
        {/* <a className="font-bold text-sm">Our Address <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.733366610744!2d90.41491571434857!3d23.756885794446873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b950aa153c43%3A0xb0b41c53f173232!2zSW52ZW50IFRhaWxvcnMgYW5kIEZhYnJpY3MgLyDgpofgpqjgpq3gp4fgpqjgp43gpp8g4Kaf4KeH4KaH4Kay4Ka-4Kaw4KeN4Ka4IOCmkyDgpqvgp4fgpqzgp43gprDgpr_gppXgp43gprg!5e0!3m2!1sen!2sbd!4v1677571903515!5m2!1sen!2sbd" width="50" height="50" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></a> */}
        <p className="font-bold text-sm"><a className="no-underline hover:text-blue-600" target="_blank"
          href="https://www.google.com/maps/place/Invent+Tailors+and+Fabrics+%2F+%E0%A6%87%E0%A6%A8%E0%A6%AD%E0%A7%87%E0%A6%A8%E0%A7%8D%E0%A6%9F+%E0%A6%9F%E0%A7%87%E0%A6%87%E0%A6%B2%E0%A6%BE%E0%A6%B0%E0%A7%8D%E0%A6%B8+%E0%A6%93+%E0%A6%AB%E0%A7%87%E0%A6%AC%E0%A7%8D%E0%A6%B0%E0%A6%BF%E0%A6%95%E0%A7%8D%E0%A6%B8/@23.7568858,90.4128772,17z/data=!3m1!4b1!4m6!3m5!1s0x3755b950aa153c43:0xb0b41c53f173232!8m2!3d23.7568809!4d90.4171044!16s%2Fg%2F11h_7k62ln" rel="noreferrer">Our Address</a></p>
        <p className="font-bold text-lg">Rampura, Hazipara</p>
        
        </div>
        </div>
        
      </div>
      
    </div>
    </div>
    </div>
  );
};

export default Address;
