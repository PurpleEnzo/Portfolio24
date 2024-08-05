import React, {useEffect} from 'react';
import projects from '../projectdata.json';

import externalWindow from '../images/External.svg'
import expand from '../images/Arrow_right.svg'

const skillColorMap = {
  "HTML/CSS" : "#F13939",
  "JavaScript" : "#3DF139",
  "UI/UX Design" : "#F18739",
  "WordPress" : "#39D0F1",
  "Product Design": "#F1C939",
  "VB.NET": "#C139F1",
  "C#" : "#C139F1",
  "Telerik Kendo" : "#F139C9",
  "Webflow": "#39D0F1"};


const Section3 = () => {

  useEffect(() => {
    const elements = document.getElementsByClassName('skillset');

    for (let i = 0; i < elements.length; i++) {
      const skill = elements[i].textContent;
      const color = skillColorMap[skill] || '#000000'; // Default to black if the skill is not in the map
      elements[i].style.color = color;
      elements[i].style.borderColor = color;
    }
  }, []);
  


return (
  <div id='mywork' className="section section-3">
     <div className='inner'>
        <div className="titleHeader">
            <div className='titleCard'>my work</div>
        </div>
        <div className='grid'>
          {projects.map((project) => (
            <div key={project.id} className='card work'>
            <div className='title-area'>
              <h1>{project.title}</h1>
              <h3>{project.jobRole}</h3>
            </div>
            <div className='description'>
              <p>{project.shortline}</p>
            </div>
            <div className='bottomRow'>
              <div className='grid L'>
                  {project.skillsUsed.map((skill, index) => (
                     <div key={index} className='skillset'>{skill}</div> 
                  ))}
              </div>
              <div className='buttonCont'>
                <a className='link' href={project.link} target='blank'><img className='icon' src={externalWindow} alt='link'/></a>
                <a className='expand' href={project.expand}><img className='icon' src={expand} alt='expand'/></a>
              </div>
            </div>
          </div>
          ))}
        </div>
        </div>
      </div>

)};

export default Section3;
