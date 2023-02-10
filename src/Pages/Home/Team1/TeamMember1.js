import React from 'react';

const TeamMember1 = ({team1}) => {
    const [name, title, img] = team1;
    return (
        <div className="carousel-item">
        <img src={img} alt="Burger" />
        <h3>{title}</h3>
        <p>{name}</p>
      </div> 
    );
};

export default TeamMember1;