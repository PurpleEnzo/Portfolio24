import React from 'react';
import eodj from '../images/eodj.svg'

const AboutMe = () => (
  <div id='aboutme' className="section section-2">
    <div className='inner'>
      <div className="titleHeader">
        <div className='titleCard'>about me</div>
      </div>
      <div className='middle'>
        <div className='card XL'>
          <div className='interior'>
            <h1>Enthusiastic and talented, I am dedicated to transforming digital ideas into reality with a creative and decisive approach.</h1>
            <img src={eodj} alt='' title='Whoa! Look at this handsome fella!'></img>
          </div>
        </div>
        <div className='grid'>
          <div className='card L'>
            <div className='interior'>
              <h1>testing</h1>
            </div>
          </div>
          <div className='card L'>
            <div className='interior'>
              <h1>testing</h1>
            </div>
          </div>
          <div className='card L'>
            <div className='interior'>
              <h1>testing</h1>
            </div>
          </div>
          <div className='card L'>
            <div className='interior'>
              <h1>testing</h1>
            </div>
          </div>
        </div>
      </div>
      <div className='bottom'>
        <div className='card S'>
        <div className='interior'>
              <h1>testing</h1>
            </div>
        </div>
        <div className='card Long'>
        <div className='interior'>
              <h1>testing</h1>
            </div>
        </div>
      </div>
    </div>
  </div>
);

export default AboutMe;
