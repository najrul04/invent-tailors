import React from 'react';
import { AiOutlineStar } from "react-icons/ai";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import './Ratings.css';

const Ratings = ({ratings}) => {
    // console.log("~ file: Star.js ~ line 4 ~ Star ~ star", ratings)
    const ratingsStar = Array.from({length:5}, (elem, index) => {
        
        let number = index + 0.5;

        return(
            <span key={index}>
                {
                    ratings >= index + 1 ? <FaStar/> : ratings >= number ? <FaStarHalfAlt/> : <AiOutlineStar/>
                }
            </span>
        )
    });
    return (
            <div className="icon">
                {ratingsStar}
            </div>
    );
};

export default Ratings;