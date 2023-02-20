import React from 'react';
import img6 from '../../../assets/icons//6deliveryt.svg';
import img2, { default as img1 } from '../../../assets/icons/1group.svg';
import img3 from '../../../assets/icons/3person.svg';
import img4 from '../../../assets/icons/4Wrench.svg';
import img5 from '../../../assets/icons/5check.svg';
import WhyUsItem from './WhyUsItem';

const whyUsData = [
    {
        image: img1,
        id: 1,
        title: 'Expert Team'
    },
    {
        image: img2,
        id: 2,
        title: 'Timely Delivery'
    },
    {
        image: img3,
        id: 3,
        title: '24/7 Support'
    },
    {
        image: img4,
        id: 4,
        title: 'Best Equipment'
    },
    {
        image: img5,
        id: 5,
        title: '100% Guranty'
    },
    {
        image: img6,
        id: 6,
        title: 'Timely Delivery'
    }
  ]

const WhyUs = () => {
  return (
    /* component */
   <div className='max-sm:hidden md:block xl:block'> 
    <div className='text-center mb-4'>
   <p className="text-2xl font-bold text-orange-600 py-3">Core Features</p>
   <h2 className="lg:text-5xl md:text-4xl max-sm:text-3xl font-semibold py-3">Why Choose Us</h2>
   <p className="max-sm:text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti nesciunt nemo <br /> sed dolores ullam necessitatibus id exercitationem repellendus veritatis iure?</p>
</div>
    <div className='flex justify-center my-5'>
                {
                    whyUsData.map(whyUs => <WhyUsItem
                    key={whyUs._id}
                    whyUs={whyUs}
                    />)
                }
            </div>
   </div>
  );
};

export default WhyUs;