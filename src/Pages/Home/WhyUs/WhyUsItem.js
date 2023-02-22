import React from 'react';

const WhyUsItem = ({whyUs}) => {
    const {image, title} = whyUs;
    return (
            <div className='mx-5 p-4 border flex flex-col items-center rounded-lg hover:bg-orange-500 pointer-events-auto cursor-pointer bg-base-100 shadow-xl border-inherit ease-in duration-300'>
            <div>
                <img className=' py-2' src={image} alt="" />
            </div>
            <div className='font-bold md:text-sm'>
                {title}
            </div>
            </div>
    );
};

export default WhyUsItem;