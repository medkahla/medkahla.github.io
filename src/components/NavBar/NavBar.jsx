import 'bootstrap/dist/css/bootstrap.min.css';
import './nav.css';
import React, { useState, useEffect } from 'react';

const NavBar = () => {

  const [activeSection, setActiveSection] = useState(null);
  const handleScroll = () => {
    const sections = document.querySelectorAll('section');
    const navHeight = document.getElementById('mainNav').offsetHeight;
  
    sections.forEach((section) => {
      const top = section.offsetTop - navHeight;
      const height = section.clientHeight;
  
      if (window.scrollY >= top && window.scrollY < top + height) {
        setActiveSection(section.id);
      }
    });
  };
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

    return (
    <div className='header sticky-top align-items-center'>
      <nav className="header sticky-top" id="mainNav">
        <ul className='d-flex justify-content-around justify-items-center'>
          <li className={activeSection === 'about' ? 'active' : ''}>
            <a href="#about"><b>About Me</b></a>
          </li>
          <li className={activeSection === 'services' ? 'active' : ''}>
            <a href="#services"><b>Services</b></a>
          </li>
          <li className={activeSection === 'skills' ? 'active' : ''}>
            <a href="#skills"><b>Skills</b></a>
          </li>
          <li className={activeSection === 'projects' ? 'active' : ''}>
            <a href="#projects"><b>Projects</b></a>
          </li>
          <li className={activeSection === 'experience' ? 'active' : ''}>
            <a href="#experience"><b>Experience</b></a>
          </li>
          <li className={activeSection === 'footer' ? 'active' : ''}>
            <a href="#footer"><b>Contact</b></a>
          </li>
        </ul>
      </nav>
    </div>
    );
   }
   
   export default NavBar;