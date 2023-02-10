import React, { useEffect, useState } from 'react';
// Import Swiper React components

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import TeamMember1 from './TeamMember1';

const Team1 = () => {
    const [team1, setTeam1] = useState([]);
    useEffect(() =>{
        fetch('team.json')
        .then(res => res.json())
        .then(data => setTeam1(data))
    })
    return (
        <div>
             <div className='text-center mb-4'>
                <p className="text-2xl font-bold text-orange-600 py-3">Team</p>
                <h2 className="text-5xl font-semibold py-3">Team Members</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti nesciunt nemo <br /> sed dolores ullam necessitatibus id exercitationem repellendus veritatis iure?</p>
            </div>
            <div className="carousel rounded-box">

  {
    team1.map(team1 => <TeamMember1
    key={team1._id}
    team1={team1}
    />)
  }
  
</div>
        </div>
    );
};

export default Team1;
