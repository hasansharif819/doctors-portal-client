import React from 'react';
import flouride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import whitenning from '../../../assets/images/whitening.png';
import treatement from '../../../assets/images/treatment.png';
import Service from '../Home/Service/Service';
import PrimaryButton from '../Home/PrimaryButton/PrimaryButton';

const Services = () => {
    const services = [
        {
            _id: 1,
            name: "Fluoride Treatment",
            description: "Here we care about your Flouride",
            img: flouride
        },
        {
            _id: 2,
            name: "Cavity Filling",
            description: "Here we care about your Cavity Filling",
            img: cavity
        },
        {
            _id: 3,
            name: "Teeth Whitenning",
            description: "Here we care about your Teeth Whitenning",
            img: whitenning
        }
    ]
    return (
        <div>
            <div className='text-center pt-10'>
                <h2 className='uppercase text-primary font-bold text-2xl'>Our Services</h2>
                <h2 className='text-4xl'>ServicesWe Provide</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
            <div className="card lg:card-side bg-base-100 shadow-xl mt-10 px-12 mx-12">
                <figure className='w-1/2 h-96'>
                    <img src={treatement} alt="Album"/>
                    </figure>
                <div className="card-body w-2/3 pl-20">
                    <h2 className="card-title font-bold text-2xl">Exceptional Dental Care, on Your Terms</h2>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <div className="card-actions justify-start">
                    <PrimaryButton>Get Started</PrimaryButton>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;