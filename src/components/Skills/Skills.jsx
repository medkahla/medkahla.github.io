import React from 'react';
import './skill.css';

import { FaHtml5, FaCss3Alt, FaJs, FaAdobe, FaPython, FaDatabase, FaReact, FaNode, FaJava, FaAngular, FaTrello, FaCode, FaGithub, FaPhp, FaWordpress } from 'react-icons/fa';
import { SiMicrosoftoffice, SiAdobephotoshop, SiCanva, SiAdobeillustrator, SiAdobe, SiAdobexd, SiMysql, SiMongodb, SiSpringboot } from 'react-icons/si';

const techs = [
  {
    name: "HTML",
    icon: <FaHtml5 />,
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt />,
  },
  {
    name: "JavaScript",
    icon: <FaJs />,
  },
  {
    name: "Microsoft Office",
    icon: <SiMicrosoftoffice />,
  },
  {
    name: "Adobe Photoshop",
    icon: <SiAdobephotoshop />,
  },
  {
    name: "Adobe Illustrator",
    icon: <SiAdobeillustrator />,
  },
  {
    name: "Adobe Premiere",
    icon: <SiAdobe/>,
  },
  {
    name: "Adobe XD",
    icon: <SiAdobexd />,
  },
  {
    name: "Python",
    icon: <FaPython />,
  },
  {
    name: "MySQL",
    icon: <SiMysql />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
  },
  {
    name: "React",
    icon: <FaReact />,
  },
  {
    name: "Node",
    icon: <FaNode />,
  },
  {
    name: "Express",
    icon: <FaCode />,
  },
  {
    name: "Java",
    icon: <FaJava />,
  },
  {
    name: "SpringBoot",
    icon: <SiSpringboot />,
  },
  {
    name: "Angular",
    icon: <FaAngular />,
  },
  {
    name: "Balsamic",
    icon: <FaTrello />,
  },
  {
    name: "Trello",
    icon: <FaTrello />,
  },
  {
    name: "Canva",
    icon: <SiCanva/>,
  },
  {
    name: "VSCode",
    icon: <FaCode />,
  },
  {
    name: "Github",
    icon: <FaGithub />,
  },
  {
    name: "Php",
    icon: <FaPhp />,
  },
  {
    name: "Laravel",
    icon: <FaPhp />,
  },
  {
    name: "Wordpress",
    icon: <FaWordpress />,
  },
];


const Skills = () => {

  return (
    <div id='skills'>
      <br />
        <div className="text-center">
            <h2 className="skills font-weight-bold">So, as shown in my resume</h2>
            <p className='general text-center'>
              I have worked on many projects in work, interships or study and I am comfortable with the following Technologies and Tools.
            </p>
        </div>
        <div>
              <div className="gallery">
                <div className='technologies'>
                  {techs.map((tech, index) => (
                    <div className='technology' key={index}>
                      {tech.icon}
                      <span className='title'> {tech.name} </span>
                    </div>
                  ))}
                  {techs.map((tech, index) => (
                    <div className='technology' key={index + techs.length}>
                      {tech.icon}
                      <span className='title'> {tech.name} </span>
                    </div>
                  ))}
                </div>

              </div>
        </div>
    </div>
  )
}

export default Skills