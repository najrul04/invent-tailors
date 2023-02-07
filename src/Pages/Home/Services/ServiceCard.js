import React from "react";

const ServiceCard = ({service}) => {
    const {img, price, title} = service;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl border border-inherit ">
        <figure className=" rounded ">
          <img
          className="h-56 w-96 px-4 pt-4 rounded-3xl"
            src={img}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="text-2xl text-orange-600">Price:${price}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
