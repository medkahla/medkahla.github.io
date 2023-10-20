import React from 'react';
import { Carousel } from 'react-bootstrap';
import './experience.css';
import graphist from './graphist.png';
import graphDev from './graphic-designer.png';
import helpdesk from './helpdesk.png';
import po from './project-owner.png';
import manager from './stock-manager.png';

const Experience = () => {
  const experiences = [
    {
      position: "IT Technician - Graphic Designer",
      employer: "FTS",
      duration: "10/2022 - 05/2023",
      description: "Logo creation, preparation of screen printing frames, client validation, workspace and team management, transit control",
      tasks: [
        "Logo creation based on client request",
        "Preparation of screen printing frames",
        "Client validation after printing some samples",
        "Workspace and team management",
        "Transit control",
      ],
      realizations: [
        "New graphics for Diesel, Nudie Jeans, Armedangels...",
      ],
      photo: graphist,
    },
    {
      position: "Stock and Billing Manager",
      employer: "Ozalitana",
      duration: "02/2021 - 09/2022",
      description: "Stock management, purchase and sale invoicing, system maintenance",
      tasks: [
        "Stock management",
        "Purchase and sale invoicing",
        "System maintenance",
      ],
      realizations: [
        "Added a check management extension to the internal system",
      ],
      photo: manager,
    },
    {
      position: "Technical Support",
      employer: "DirectLines",
      duration: "08/2019 - 10/2019",
      description: "Assist fiber optic installation technicians, intervene in case of problems, perform remote configuration",
      tasks: [
        "Assist fiber optic installation technicians",
        "Intervene in case of problems",
        "Perform remote configuration",
      ],
      realizations: [],
      photo: helpdesk,
    },
    {
      position: "Project Owner",
      employer: "FAZEET",
      duration: "2017 - 2019",
      description: "Sale of personalized items, sale of electronic accessories, software repair for smartphones and PCs, photo and video editing, Freelancing",
      tasks: [
        "Sale of personalized items",
        "Sale of electronic accessories",
        "Software repair for smartphones and PCs",
        "Photo and video editing",
        "Freelancing",
      ],
      realizations: [],
      photo: po,
    },
    {
      position: "Developer, Designer and Community Manager",
      employer: "OzaliSoft",
      duration: "2013 - 2014",
      description: "Preparation and integration of templates, website creation with Wordpress, HTML, CSS, JS..., creation of ads and posters for clients",
      tasks: [
        "Preparation and integration of templates",
        "Website creation with Wordpress, HTML, CSS, JS...",
        "Creation of ads and posters for clients",
      ],
      realizations: [
        "Worked with MekkaCola, Gazaalan...",
      ],
      photo: graphDev,
    },
  ];
  



  return (
  <div id="experience">
  <section className="resume-section p-3 p-lg-5 d-flex align-items-center">
      <div className="w-100">
          <div className='d-flex justify-content-between'>
              <h2 className="skills font-weight-bold">Professional Experience</h2>
              <a href="CV-VE-21-09-2023.pdf" download>
                  <button className="btn btn-outline-secondary">Download CV</button>
              </a>
          </div>
          <br />
          <Carousel>
              {experiences.map((experience, index) => (
                  <Carousel.Item key={index}>
                    <div className="carousel-container">
                      <div className="exp-container">
                          <div className="top col-3 text-center">
                              <h3 className='poste'>{experience.position}</h3>
                              <h6>{experience.employer}, {experience.duration}</h6>
                          </div>
                          <div className="left">
                              <img src={experience.photo} alt={experience.position} className='photo' />
                          </div>
                          <div className="right">
                              <p>{experience.description}</p>
                              <ul>
                                  {experience.tasks.map((task, taskIndex) => (
                                      <li key={taskIndex}>{task}</li>
                                  ))}
                              </ul>
                          </div>
                      </div>
                      </div>
                  </Carousel.Item>
              ))}
          </Carousel>
      </div>
    </section>
  </div>
  )
}

export default Experience