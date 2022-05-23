import React from 'react';
import Banner from '../Banner/Banner';
import HomeFooter from '../HomeFooter/HomeFooter';
import Info from '../Info/Info';
import MakeAppoinment from '../MakeAppoinment/MakeAppoinment';
import Services from '../Services/Services';
import HomeContact from './HomeContact/HomeContact';
import Testimonial from './Testimonial/Testimonial';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <MakeAppoinment></MakeAppoinment>
            <Testimonial></Testimonial>
            <HomeContact></HomeContact>
            <HomeFooter></HomeFooter>
        </div>
    );
};

export default Home;