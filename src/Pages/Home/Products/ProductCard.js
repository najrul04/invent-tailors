import React from 'react';
import Ratings from './Ratings';

const ProductCard = ({products}) => {
    const {img, price, title, rating: ratings} = products;
  return (
    <div>
      <div className="card w-full bg-base-100 shadow-xl border border-inherit">
        <figure className=' mx-4 mt-4 bg-slate-200 rounded '>
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