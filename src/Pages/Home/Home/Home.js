import React from 'react';
import About from '../About/About';
import Address from '../Address/Address';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Services from '../Services/Services';
// import Team from '../Team/Team';
// import Team1 from '../Team1/Team1';
import Team2 from '../Team2/Team2';
import WhyUs from '../WhyUs/WhyUs';

const Home = () => {
    return (
        <div>
            <Banner/>
            <About/>
            <Services/>
            <Address/>
            <Products/>
            <WhyUs/>
            {/* <Team/> */}
            {/* <Team1/> */}
            <Team2/>
        </div>
    );
};

export default Home;