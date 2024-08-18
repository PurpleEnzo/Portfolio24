import React, {useEffect} from 'react';
import projects from '../projectdata.json';
import Slider from 'react-slick';
import externalWindow from '../images/External.svg'
import expand from '../images/Arrow_right.svg'
import { useState } from 'react';

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,
  arrows: true
}

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

    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [expandedProject, setExpandedProject] = useState(null);
  const [scrollDirection, setScrollDirection] = useState(null);



  const toggleExpand = (projectId) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  


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
                <div className='buttonCont'
                  role="button" 
                  tabIndex="0"
                  onClick={() => toggleExpand(project.id)} 
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') toggleExpand(project.id); }}>
                  <a className='link' href={project.link} target='_blank' rel="noreferrer">
                    <img className='icon' src={externalWindow} alt='link' />
                  </a>
                  <div className='expand' 
                      onClick={() => toggleExpand(project.id)} 
                      role="button" 
                      tabIndex="0"
                      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') toggleExpand(project.id); }}>
                    <img className='icon' src={expand} alt='expand' />
                  </div>
                </div>
              </div>
          {expandedProject === project.id && (
            <>
              <div className='overlay'    
                  role="button" 
                  tabIndex="0" 
                  onClick={() => toggleExpand(null)}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') toggleExpand(null); }}>
                  </div>
              <div className='expandableDiv'>
                <Slider {...sliderSettings} className='imageSlider'>
                  {project.images.map((image, index) => (
                      image.url ? (
                    <div key={index}>
                      <img src={image.url} alt={image.alt || 'Project Image'} />
                    </div>
                      ) : null
                  ))}
                </Slider>
                {scrollDirection === 'up' && (
                  <div className='description-scroll'>
                    <p>{project.description}</p>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  </div>
</div>
);
};

export default Section3;
