import React from 'react';

const InfoCart = ({img, cardTitle, cardDes, bgClass}) => {
    return (
        <div className= {`card lg:card-side bg-accent shadow-xl text-white ${bgClass}`}>
  <figure className='pl-5'><img src={img} alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">{cardTitle}</h2>
    <p>{cardDes}</p>
  </div>
</div>
    );
};

export default InfoCart;