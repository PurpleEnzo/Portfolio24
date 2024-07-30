import React from 'react';
import {ReactTyped}  from 'react-typed';
import { useEffect, useState } from 'react';

  const Section1 = () => {
    const [showButton, setShowButton] = useState(false);

  
    useEffect(() => {
      const timer = setTimeout(() => {
        setShowButton(true);
      }, 3500); // Adjust the timeout to match the length of the typewriter animation
      return () => clearTimeout(timer);
    }, []);
  
  return (
    <div className="section section-1">
      <div className="typewriter-container">
        <ReactTyped
          strings={[
            'Hello! I’m <span class="highlight">Enzo</span>,<br> a creative product designer <br> and developer.'
          ]}
          typeSpeed={30}
        /></div>
          {showButton && <button className='CTAButton'>get in touch</button>}
      
    </div>
  );
};

export default Section1;