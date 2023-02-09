import React, { useEffect, useState } from "react";

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
    <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5'>
                {
                    team.map(team => <TeamMember 
                    key={team._id}
                    team={team}
                    />)
                }
            </div>
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
