import React from 'react';
import About from '../About/About';
import Address from '../Address/Address';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Services from '../Services/Services';
import Team from '../Team/Team';
import WhyUs from '../WhyUs/WhyUs';

const Home = () => {
    return (
        <div>
            <Banner/>
            <About/>
            <Services/>
            <Address/>
            <Products/>
            <Team/>
            <WhyUs/>
        </div>
    );
};

export default Home;