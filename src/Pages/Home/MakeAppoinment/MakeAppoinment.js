import React from 'react';
import doctor from '../../../assets/images/doctor.png';
import appointment from '../../../assets/images/appointment.png';
import PrimaryButton from '../Home/PrimaryButton/PrimaryButton';

const MakeAppoinment = () => {
    return (
        <section style={
            {
                background: `url(${appointment})`
            }
        } className='flex justify-center items-center mt-20'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-100px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 text-white'>
                <h2 className='text-primary text-xxl font-bold '>Appinment</h2>
                <h2 className='text-2xl'>Make an appointment Today</h2>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <PrimaryButton>Get Starts</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppoinment;