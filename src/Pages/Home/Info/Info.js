import React from 'react';
import InfoCart from '../Home/InfoCart/InfoCart';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';

const Info = () => {
    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            <InfoCart cardDes = "Sun-Fri at 10am" cardTitle = "Opening Hours" bgClass = "bg-gradient-to-r from-secondary to-primary" img={marker}></InfoCart>
            <InfoCart cardDes = "Shankar Plaza Level 6 Dhanmondi 26" cardTitle = "Visit Our Locations" bgClass = "bg-accent" img={clock}></InfoCart>
            <InfoCart cardDes = "+8801640911511" cardTitle = "Contact Us Now" bgClass = "bg-gradient-to-r from-secondary to-primary" img={phone}></InfoCart>
        </div>
    );
};

export default Info;