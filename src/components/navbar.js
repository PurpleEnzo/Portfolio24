import React  from "react";
import linkedinLogo from "../images/linkedin.svg";
import emailIcon from "../images/email.svg";
import CV from '../files/CV.pdf';


const Navbar = () => (
    <div className="navbar" id="Navbar">
        <div className="topSect" id="topSect">
            <button className="navButton" onClick="">home</button>
            <button className="navButton" onClick="">about me</button>
            <button className="navButton" onClick="">my work</button>
            <button className="navButton" onClick="">personal projects</button>
            <button className="navButton" onClick="">contact</button>
        </div>
        <div className="bottomSect" id="bottomSect">
            <a href={CV} target="blank">CV / résumé</a>
            <a href="mailto:eodj@gmail.com"><img className="icon" src={emailIcon} alt="Email me" /></a>
            <a href="https://www.linkedin.com/in/eodj" target="blank"><img className="icon" src={linkedinLogo} alt="Linkedin" /></a>
        </div>
    </div>
);

export default Navbar;