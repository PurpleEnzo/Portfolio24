import React, { useEffect, useState } from 'react';
//import {Events,  scrollSpy } from 'react-scroll';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Navbar from './components/navbar';
import './App.css';

const App = () => {
 
const [showNavbar, setShowNavbar] = useState(false);
const [allowScroll, setAllowScroll] = useState(false);

useEffect(() => {
  const timer = setTimeout(() => {
    setShowNavbar(true)
    const container = document.getElementById('container');
    if (container) {
      container.style.overflowX = 'scroll';
    }
  }, 3500);
  return () => clearTimeout(timer)
}, [])

useEffect(() => {
  const timer = setTimeout(() => {
    setAllowScroll(true)
  }, 3500);
  return () => clearTimeout(timer)
  }, [])




const handleScroll = (event) => {
  const container = event.target;
  const scrollAmount = event.deltaY;
  container.scrollTo({
    top: 0,
    left: container.scrollLeft + scrollAmount,
    behavior: 'smooth'
  },);};





  return (
    {allowScroll} && <div id="container" className="container" onWheel={handleScroll}>
      <div className="horizontal-sections">
      {showNavbar && <Navbar />}
      <Section1 />
      <Section2 />
      <Section3 />
      </div>
    </div>
  );
};

export default App;