import React, { useEffect, useState } from "react";

import { Navigation } from 'swiper';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import TeamMember from "./TeamMember";

const Team = () => {
    const [team, setTeam] = useState([]);
    useEffect(() =>{
        fetch('team.json')
        .then(res => res.json())
        .then(data => setTeam(data))
    })
  return (
    /* component */
   <div>
     <div className='text-center mb-4'>
                <p className="text-2xl font-bold text-orange-600 py-3">Popular Products</p>
                <h2 className="text-5xl font-semibold py-3">Browse Our Products</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti nesciunt nemo <br /> sed dolores ullam necessitatibus id exercitationem repellendus veritatis iure?</p>
            </div>
            <Swiper
                      modules={[Navigation]}
                      spaceBetween={50}
                      slidesPerView={3}
                      onSlideChange={() => console.log('slide change')}
                      onSwiper={(swiper) => console.log(swiper)}
                    > 
                    <SwiperSlide>
    <div className=' my-5'>
                {
                    team.map(team => 
                    <TeamMember 
                    key={team._id}
                    team={team}
                    />
                    )
                }
            </div>
                    </SwiperSlide>
                    </Swiper>
   </div>
  );
};

/* 


    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>

*/

export default Team;
