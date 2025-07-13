import React, { useState } from 'react';
import './Services.css';
import theme_pattern from '../../../assets/theme_pattern.svg';
import Services_Data from '../../../assets/services_data';
import arrow_icon from '../../../assets/arrow_icon.svg';

export const Services = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleDescription = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className='services'>
      <div className="services-title">
        <h1>My Services</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="services-container">
        {Services_Data.map((service, index) => (
          <div
            key={index}
            className="services-format"
            onClick={() => toggleDescription(index)}
          >
            <h3>{service.s_no}</h3>
            <h2>{service.s_name}</h2>
            {activeIndex === index && <p>{service.s_desc}</p>}
            <div className="services-readmore">
              <p>{activeIndex === index ? "Show Less" : "Read More"}</p>
              <img
                src={arrow_icon}
                alt=""
                style={{
                  transform: activeIndex === index ? 'rotate(90deg)' : 'rotate(0deg)',
                  transition: '0.3s'
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
