import React from 'react'
import './service.css'
import { FaPencilAlt, FaCode, FaFileAlt } from 'react-icons/fa';


const Services = () => {
    const majorSkills = [
        {
            icon: <FaPencilAlt/>,
            title:'Designer',
            content:'I am a designer with some experience. I have worked on many projects.'
        },
        {
            icon: <FaCode/>,
            title: 'Developer',
            content: 'The logical approach of the problems, the analysis, the ALGORITHM are the bases of developments.',
        },
        {
            icon: <FaFileAlt/>,
            title: "Content Manager",
            content:"I can manage the contents of your website, and make sure that they are up to date."
        }
    ]

  return (
    <div id='services'>
        <br />
        <h2 className="services text-center">Services</h2><br />
        <div className="mscontainer d-flex justify-content-around">
            {majorSkills.map((skill, id)=>{ 
                return(
                    <div className="card ms text-center border-color col-md-3" key={id}>
                        <div className="card-header">
                        <div className="mb-3">
                            <i className="icon title-color">{skill.icon}</i>
                            </div>
                        </div>
                        <div className="card-body">
                            <h5 className="ms-title">{skill.title}</h5>
                            <p className="ms-text">{skill.content}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Services