import React from 'react';
import parts from "../../../assets/images/about_us/parts.jpg";
import person from "../../../assets/images/about_us/person.jpg";
const About = () => {
    return (
        <div>
            <div className="hero mb-20">
  <div className="hero-content flex-col lg:flex-row">
    <div className='relative w-1/2'>
    <img src={person} className="w-4/5 h-full rounded-lg shadow-2xl" alt='pic' />
    <img src={parts} className="absolute right-2 top-1/2 w-3/5 border-8 rounded-lg shadow-2xl" alt='pic' />
    </div>
    <div className='w-1/2'>
        <p className="text-2xl font-bold text-orange-600">About Us</p>
      <h1 className="my-5 text-5xl font-bold">
        We are qualified <br /> 
        and experienced <br />
        in this field</h1>
      <p className="py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores obcaecati nisi ea eveniet, qui eius neque in voluptatem voluptas architecto, possimus dicta ipsum animi necessitatibus sint incidunt ex assumenda explicabo at autem inventore quaerat hic, similique vel! Itaque, aliquid fugiat hic qui earum similique quibusdam. Voluptates placeat ea, suscipit consequatur deserunt at, quasi porro perspiciatis, iste quos asperiores laudantium delectus.</p>
      <p className="py-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur illum qui, architecto beatae consectetur fuga quia dolorum error vero molestiae!</p>
      <button className="btn btn-primary">Get more info</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default About;