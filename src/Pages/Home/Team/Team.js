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
             <div className='text-center mb-4 pt-10'>
                <p className="text-2xl font-bold text-blue-500">Team</p>
                <h2 className="lg:text-5xl md:text-4xl max-sm:text-3xl font-semibold pt-5">Team Members</h2>
                <p className="text-lg max-sm:text-sm pt-5 font-semibold">Expert, Efficient, Reliable and most importantly vastly experienced <br /> Employees to make sure to provide the best possible outcome and satisfy customer needs.</p>
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
