import React from 'react';
import img6 from '../../../assets/icons//6deliveryt.svg';
import { default as img1 } from '../../../assets/icons/1group.svg';
import img4 from '../../../assets/icons/4Wrench.svg';
import img5 from '../../../assets/icons/5check.svg';
import WhyUsItem from './WhyUsItem';

const whyUsData = [
    {
        image: img1,
        id: 1,
        title: 'Expert Team'
    },
    /* {
        image: img2,
        id: 2,
        title: 'Timely Delivery'
    },
    {
        image: img3,
        id: 3,
        title: '24/7 Support'
    }, */
    {
        image: img4,
        id: 4,
        title: 'Best Equipment'
    },
    {
        image: img5,
        id: 5,
        title: '100% Guaranty'
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
   <div className='max-sm:hidden md:block xl:block pt-10'> 
    <div className='text-center'>
   <p className="text-2xl font-bold text-blue-500">Core Features</p>
   <h2 className="lg:text-5xl md:text-4xl max-sm:text-3xl font-semibold pt-5">Why Choose Us</h2>
   <p className="max-sm:text-sm pt-5 font-semibold">We have a set experts employees who function in a chain of command <br /> to ensure Timely Delivery with the best equipment on hand and 100% guarantee</p>
</div>
    <div className='flex justify-center pt-5'>
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