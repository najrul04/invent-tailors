import React from "react";
import { FiPhoneCall } from 'react-icons/fi';
import { MdLocationPin } from 'react-icons/md';
import { SlCalender } from 'react-icons/sl';
const Address = () => {
  return (
    <div className="flex items-center justify-center ">
      <div className="grid grid-rows-3 content-center mt-10 w-4/5 md:w-full max-sm:hidden md:block xl:block bg-base-200 shadow-xl border-0 rounded-xl hover:animate-bounce cursor-pointer">
        
        <div className="card w-4/5 md:w-full bg-gradient-to-b from-blue-100 via-blue-300 to-blue-500 text-base-content text-white shadow-xl">
      <div className="card-body grid grid-cols-3 gap-1 content-center">
        <div className="flex justify-center items-center">
        <SlCalender className="mx-4" size='2rem'/>
        <div>
        <p className="font-bold text-lg">we are open 7 days</p>
        <p className="font-bold text-lg">9:00 am - 9:00 pm</p>
        </div>
        </div>
        
        <div className="flex justify-center items-center">
        <FiPhoneCall className="mx-4" size='2rem'/>
        <div>
        <p className="font-bold text-lg">we are open 7 days</p>
        <p className="font-bold text-lg">9:00 am - 9:00 pm</p>
        </div>
        </div>
        
        <div className="flex justify-center items-center">
        <MdLocationPin className="mx-4" size='2rem'/>
        <div>
        <p className="font-bold text-lg">we are open 7 days</p>
        <p className="font-bold text-lg">9:00 am - 9:00 pm</p>
        </div>
        </div>
        
      </div>
      
    </div>
    </div>
    </div>
  );
};

export default Address;
