import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import TeamMember from './TeamMember';


const Team = () => {
    const [team, setTeam] = useState([]);
    useEffect(() =>{
        fetch('team.json')
        .then(res => res.json())
        .then(data => setTeam(data))
    })
    return (
        <div>
             <div className='text-center mb-4'>
                <p className="text-2xl font-bold text-orange-600 py-3">Team</p>
                <h2 className="text-5xl font-semibold py-3">Team Members</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti nesciunt nemo <br /> sed dolores ullam necessitatibus id exercitationem repellendus veritatis iure?</p>
            </div>
            
            <div className="carousel rounded-box">
            <Swiper  slidesPerView={3}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        breakpoints={{
            0:{
                slidesPerView:1
            },
            520:{
                slidesPerView:2
            },
            950:{
                slidesPerView:3
            }
        
        }}
    >
            {
                team.map(team =>
                    <SwiperSlide  className="grid grid-rows gap-2 py-10">
                    <TeamMember
                    key={team._id}
                    team={team}
                /></SwiperSlide>)
            }
            </Swiper>
  
            </div>
        </div>
    );
};

export default Team;
