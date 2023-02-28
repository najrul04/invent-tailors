import React from 'react';

const TeamMember1 = ({team}) => {
    const {name, title, img, experience} = team;
    return (
  
        
       <div className="bg-base-100 shadow-xl border border-inherit p-6 rounded-lg w-full">
       <img className="swiper_image rounded-lg" src={img} alt="" />
       <div className="pt-6 text-center">
           <h1 className="mt-2 font-bold text-lg">{name}</h1>
           <h3 className="my-2 font-semibold">{title}</h3>
           <span className='text-sm'>Experience: {experience}</span>
       </div>
   </div>
    );
};

export default TeamMember1;