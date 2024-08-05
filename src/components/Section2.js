import React from 'react';
import eodj from '../images/eodj.svg'
import skillData from '../skillData.json'

import htmlImage from '../images/html5.png';
import cssImage from '../images/css3.png';
import javascriptImage from '../images/javascript.png';
import typescriptImage from '../images/typescript.png';
import reactImage from '../images/react.png';
import telerikImage from '../images/telerik.svg';
import webflowImage from '../images/webflow.png';
import wordpressImage from '../images/wordpress.png';
import figmaImage from '../images/figma.svg';
import adobeImage from '../images/adobe.png';
import gitImage from '../images/git.png'

// Create a mapping of image sources
const imageMap = {
  "../images/html5.png": htmlImage,
  "../images/css3.png": cssImage,
  "../images/javascript.png": javascriptImage,
  "../images/typescript.png": typescriptImage,
  "../images/react.png": reactImage,
  "../images/telerik.svg": telerikImage,
  "../images/webflow.png": webflowImage,
  "../images/wordpress.png": wordpressImage,
  "../images/figma.svg": figmaImage,
  "../images/git.png" : gitImage,
  "../images/adobe.png": adobeImage
};


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
            <div className='interior' style={{justifyContent: 'center'}}>
              <h1 style={{padding: 0}}>Values</h1>
              <p style={{fontSize: 18}}>Trust, honesty, transparency, creative thinking, and respect define me personally and professionally. I believe these values are the foundation of strong relationships and strive to integrate them into every interaction. Being transparent and authentic helps me thrive in an open and respectful environment. </p>
            </div>
          </div>
          <div className='card L'>
            <div className='interior' style={{justifyContent: 'center'}}>
              <h1 style={{padding: 0, marginLeft: '0.5em'}}>Background</h1>
              <p style={{fontSize: 18}}>My interest in programming and design started with a game I created with a friend at 10 years old. We built maps, 3D objects, textures, and sounds, and I fell in love with JavaScript. Using the Unity Engine showed me what I could achieve. Now, I have a diploma in Games Design and Development and am a skilled Full Stack Designer.


              </p>
            </div>
          </div>
          <div className='card L'>
            <div className='interior' style={{justifyContent: 'center'}}>
              <h1 style={{padding: 0}}>Process</h1>
              <p style={{fontSize: 18}}>My process begins with gathering and understanding all provided ideas. I then create mockups using Figma to visualize the concepts. 
                After this, I research the best development methods to ensure efficiency and effectiveness. Finally, I proceed to develop the 
                project, bringing the initial ideas to life with precision and creativity.</p>
            </div>
          </div>
          <div className='card L'>
            <div className='interior' style={{justifyContent: 'center'}}>
              <h1 style={{padding: 0}}>Goals</h1>
              <p style={{fontSize: 18}}>I aim to grow professionally to the point of starting my own creative design agency. I’m passionate about honing my skills, building strong client relationships, and leading innovative projects. My goal is to build a reputable agency known for creativity, collaboration, and excellence.</p>
            </div>
          </div>
        </div>
      </div>
      <div className='bottom'>
        <div className='card S'>
        <div className='interior'>
          <div className='firstLine'>
              <h1>Location</h1>
              <p>Manchester, UK</p>
          </div>
          <div className='firstLine'>
              <h1>Current Employment</h1>
              <p>Front-End Developer @ Tracware Ltd</p>
          </div>
            </div>
        </div>
        <div className='card Long'>
        <div className='interior' style={{justifyContent: 'center', padding: 0}}>
            <div id="skills-container">
              {skillData.map((skill) => (
             <div key={skill.id} className="skill">
              <img src={imageMap[skill.imgSrc]} alt={skill.title} />
              <h3>{skill.title}</h3>
              <div className="indicators">
              </div>
        </div>
      ))}
    </div>
            </div>
        </div>
      </div>
    </div>
  </div>
);

export default AboutMe;
