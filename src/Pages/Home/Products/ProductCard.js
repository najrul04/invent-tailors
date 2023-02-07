import React from 'react';
import Ratings from './Ratings';

const ProductCard = ({products}) => {
    const {img, price, title, rating: ratings} = products;
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure className=' m-5 bg-slate-600'>
          <img 
          className="object-scale-down h-48 w-96 py-4"
            src={img}
            alt="Shoes"
          />
        </figure>
        
        <div className="card-body items-center text-center">
            <Ratings ratings = {ratings} />
          <h2 className="card-title">{title}</h2>
          <p className="text-2xl text-orange-600">Price:${price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;