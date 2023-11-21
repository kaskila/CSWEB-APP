

import React from 'react';
import './MyCard.css';

const MyCard = (props) => {
  const { name, position, email, image, link } = props;

  return (
    <div className='upc'>
      <div className='gradient'></div>
      <div className='profile-down'>
        <div className='profile-img'>
          <img src={image} alt={name} />
        </div>
        <div className='profile-title'>{name}</div>
        <div className="profile-description">{position}</div>
      </div>
      <div className="profile-button">
        <a href={`mailto:${email}`}>Email</a>
        <a href={link} target="_blank" rel="noopener noreferrer">View Profile</a>
      </div>
    </div>
  );
};


export default MyCard;

