import React from 'react';
import './about.css';

const About = () => {
  return (
    <div id='about' className='About'>
        <div className="container d-flex justify-content-around align-items-center">
        <div className="col-6 text-center">
            <h1 className="display-4 font-weight-bold">Hi, I'm <span className='myName'>Mohamed El Kahla</span></h1>
                <p className="lead">
                    Thank you for visiting. I'm excited to share my work and experience with you.
                </p>
                    <a href="CV-VE-21-09-2023.pdf" download><button className="btn btn-outline-secondary">Download CV</button></a>
        </div>
        <div className="col-6">
            <img src={require('./IMG_E2395.png')} alt="MyPic" className="img-fluid" />
        </div>
        </div>  
        <br />
    </div>
  )
}

export default About