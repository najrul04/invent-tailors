import React from 'react';
import About from '../About/About';
import Address from '../Address/Address';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner/>
            <About/>
            <Services/>
            <Address/>
            <Products/>
        </div>
    );
};

export default Home;