import React from 'react'; // import Swiper core and required modules

import { SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const TeamMember = ({team}) => {
    const {img, price, title} = team;
    return (
        <div>   
            
      <SwiperSlide>
      <div className="card w-96 bg-base-100 shadow-xl border border-inherit ">
        <figure className=' mx-4 mt-4 bg-slate-200 rounded '>
          <img 
          className="object-scale-down h-48 w-96 py-4"
            src={img}
            alt="Shoes"
          />
        </figure>
        
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <p className="text-2xl text-orange-600">Price:${price}</p>
        </div>
      </div>
      </SwiperSlide>
    </div>
    );
};

export default TeamMember;