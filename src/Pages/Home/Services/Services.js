import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() =>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    })
    return (
        <div>
            <div className='text-center mb-4 pt-10'>
                <p className="text-2xl font-bold text-orange-600">Services</p>
                <h2 className="lg:text-5xl md:text-4xl max-sm:text-3xl font-semibold pt-5">Our Service Area</h2>
                <p className="max-sm:text-sm pt-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti nesciunt nemo <br /> sed dolores ullam necessitatibus id exercitationem repellendus veritatis iure?</p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5 pt-5'>
                {
                    services.map(service => <ServiceCard
                    key={service._id}
                    service={service}
                    />)
                }
            </div>
        </div>
    );
};

export default Services;