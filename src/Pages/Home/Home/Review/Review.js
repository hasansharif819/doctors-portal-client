import React from 'react';

const Review = ({ review }) => {
    return (

        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <div>
                    <p>{review.description}</p>
                </div>
                <div className='flex justify-start items-center'>
                    <div className="avatar">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={review.img} alt=""/>
                        </div>
                    </div>
                    <div className='ml-5'>
                        <h2 className="card-title">{review.name}</h2>
                        <p>{review.address}</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Review;