import React from 'react';
import './project.css';
import RateIT from './RateIT.png';
import FH from './feedHope2.png';
import FC from './FC0.png';

const Projects = () => {
  const projects = [
    {
      title:"RateIT",
      code:"https://github.com/medkahla/Python/tree/master/RateIT",
      logo: RateIT,
      description: "RateIT was to collect reviews from different user about divers subjects and businesses, and letting the business owners get their rate directly and honest reviews.",
      techTools:[
        {
          name:"Python",
          logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/935px-Python-logo-notext.svg.png",
        },
        {
          name:"Flask",
          logo:"https://cdn.icon-icons.com/icons2/2389/PNG/512/flask_logo_icon_145276.png",
        },
        {
          name:"MySQL",
          logo:"https://aety.io/wp-content/uploads/2016/11/mysql-logo.png",
        },
        {
          name:"VSCode",
          logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png",
        },
        {
          name:"Workbench",
          logo:"https://w7.pngwing.com/pngs/385/582/png-transparent-mysql-workbench-macos-bigsur-icon-thumbnail.png",
        },
        {
          name:"Balsamic",
          logo:"https://balsamiq.com/assets/company/brandassets/smileyface-transparent-1080x1080.png",
        },
        {
          name:"Trello",
          logo:"https://w7.pngwing.com/pngs/453/731/png-transparent-circle-round-icon-trello-popular-services-brands-vol-2-icon.png",
        },
        {
          name:"Github",
          logo:"https://cdn-icons-png.flaticon.com/512/25/25231.png",
        },
        {
          name:"Canva",
          logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Canva_icon_2021.svg/2048px-Canva_icon_2021.svg.png",
        },
      ],
      demo:"https://www.canva.com/design/DAFlRLKGhWM/view",
    },
    {
      title:"FeedHope",
      code:"https://github.com/medkahla/MERN/tree/main/FeedHope",
      logo:FH,
      description: "FeedHope is a platform to connect donors of surplus food as hotels and restaurants with some volunteers or agencies who know where and to whom giving it.",
      techTools:[
        {
          name:"React",
          logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
        },
        {
          name:"Node",
          logo:"https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png",
        },
        {
          name:"Express",
          logo:"https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png",
        },
        {
          name:"MongoDB",
          logo:"https://e7.pngegg.com/pngimages/241/983/png-clipart-mongodb-nosql-database-computer-icons-others-leaf-grass.png",
        },
        {
          name:"VSCode",
          logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png",
        },
        {
          name:"Balsamic",
          logo:"https://balsamiq.com/assets/company/brandassets/smileyface-transparent-1080x1080.png",
        },
        {
          name:"Trello",
          logo:"https://w7.pngwing.com/pngs/453/731/png-transparent-circle-round-icon-trello-popular-services-brands-vol-2-icon.png",
        },
        {
          name:"Github",
          logo:"https://cdn-icons-png.flaticon.com/512/25/25231.png",
        },
        {
          name:"Canva",
          logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Canva_icon_2021.svg/2048px-Canva_icon_2021.svg.png",
        },
      ],
      demo:"https://www.youtube.com/watch?v=KgA2TpKJC30&list=RDMMKgA2TpKJC30&start_radio=1",
    },
    {
      title:"FamiliaCare",
      code:"https://github.com/medkahla/Java_Project-FamiliaCare-",
      logo:FC,
      description: "FamilaCare is a platform where users can find Care Givers for those in need in their family. In the other side, Care Givers can get a job.",
      techTools:[
        {
          name:"Java",
          logo:"https://logos-world.net/wp-content/uploads/2022/07/Java-Logo.png",
        },
        {
          name:"SpringBoot",
          logo:"https://blog.talanlabs.com/microservices-partie-4-spring-boot/cover.png",
        },
        {
          name:"Angular",
          logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png",
        },
        {
          name:"TypeScript",
          logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png?20221110153201",
        },
        {
          name:"MySQL",
          logo:"https://aety.io/wp-content/uploads/2016/11/mysql-logo.png",
        },
        {
          name:"VSCode",
          logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png",
        },
        {
          name:"Workbench",
          logo:"https://w7.pngwing.com/pngs/385/582/png-transparent-mysql-workbench-macos-bigsur-icon-thumbnail.png",
        },
        {
          name:"Balsamic",
          logo:"https://balsamiq.com/assets/company/brandassets/smileyface-transparent-1080x1080.png",
        },
        {
          name:"Trello",
          logo:"https://w7.pngwing.com/pngs/453/731/png-transparent-circle-round-icon-trello-popular-services-brands-vol-2-icon.png",
        },
        {
          name:"Github",
          logo:"https://cdn-icons-png.flaticon.com/512/25/25231.png",
        },
        {
          name:"Canva",
          logo:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Canva_icon_2021.svg/2048px-Canva_icon_2021.svg.png",
        },
      ],
      demo:"https://www.canva.com/design/DAFuRHHZljM/LSyNwYNZsGFE0zQmYJJs-Q/edit?utm_content=DAFuRHHZljM&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    }
  ]

  return (
    <div id="projects">
            <hr />
            <h2 className="skills font-weight-bold text-center">Here is some recent projects</h2>
            <div className="projects">
                {projects.map((project, i) => {
                    return (
                        <div className="box col-8" key={i}>
                            <div className="top">
                                <div className="left">
                                    <h4 className='titre'>{project.title}</h4>
                                    <img src={project.logo} alt={project.title} className="logo" />
                                    <div className="code-link">
                                        <a href={project.code} target="_blank" rel="noopener noreferrer">
                                            <button className='btn btn-outline-secondary'>Find Code</button>
                                        </a>
                                    </div>
                                </div>
                                <div className="right">
                                    <p>{project.description}</p>
                                    <hr />
                                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                        <button className="btn btn-outline-success">View Demo</button>
                                    </a>
                                </div>
                            </div>
                            <div className="bottom">
                                <b>Technologies & Tools:</b><br />
                                {project.techTools.map((techTool, index) => {
                                    return (
                                        <div key={index} className="tech-tool">
                                            <img className="logoTech" src={techTool.logo} alt={techTool.name} />
                                            <strong>{techTool.name}</strong>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
            <hr />
        </div>  
  )
}

export default Projects