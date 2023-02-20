import React from 'react';

import './BannerItem.css';
const BannerItem = ({slide}) => {
    const {image, id, prev, next} = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-fit">
   <div className='carousel_img'>
   <img src={image} alt='banner' className="w-screen rounded-xl" />
   </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 w-2/5 left-24 top-1/2 max-sm:hidden md:block xl:block">
      <p className='lg:text-2xl md:text-lg sm:text-xs text-white' >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia vel optio assumenda dolor libero in excepturi, quod suscipit voluptate inventore?</p>
    </div>
    <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-24 max-sm:left-8 top-2/3 max-sm:top-4/5 md:mt-4">
    <button className="btn bg-gradient-to-b from-blue-100 via-blue-300 to-blue-500 text-base-content text-white mr-5 border-0 max-sm:text-xs ">Warning</button>
    <button className="btn btn-outline bg-gradient-to-b from-blue-100 via-blue-300 to-blue-500 text-base-content text-white mr-5 border-0 max-sm:text-xs">Button</button>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4 max-sm:top-1/4  max-sm:left-8">
      <h1 className='lg:text-6xl md:text-4xl sm:text-sm font-bold text-white'>
        Affordable <br />
        Price for Car <br />
        Servicing
        
      </h1>
    </div>
    {/* <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0"> */}
    <div  className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 max-sm:hidden md:block xl:block ">
      <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a> 
      <a href={`#slide${next}`} className="btn btn-circle">❯</a>
    </div>
  </div> 
    );
};

export default BannerItem;