import React from 'react';

const ServiceCard = ({ icon, title, description, btn }) => {
  return (
    <div className="service-card">
      <i className={icon} ></i>
      <h2>{title}</h2>
      <p>{description}</p>
      <a href="/">Learn more</a>
      {btn && <button className="service-button">{btn}</button>}
    </div>
    
  );
};

export default ServiceCard;
