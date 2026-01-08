import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/img_about.jpg'


const About = () => {
    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h1>Sobre mí</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profile_img} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p className='about-para-title'>Técnico Superior en DAM | Especializado en IA & Big Data</p>
                        <p>Actualmente desarrollo aplicaciones web para el sector logístico utilizando ASP .NET MVC y SQL Server. Diseño y construyo APIs basadas en microservicios con .NET 8, y participo activamente en reuniones con clientes para el análisis de requisitos y definición de nuevas funcionalidades.</p>
                    </div>
                    {/* <div className="about-skills">
                        <div className="about-skill"><p>HTML & CSS</p><hr style={{ width: "50%" }} /></div>
                        <div className="about-skill"><p>React JS</p><hr style={{ width: "40%" }} /></div>
                        <div className="about-skill"><p>Java</p><hr style={{ width: "60%" }} /></div>
                        <div className="about-skill"><p>Python</p><hr style={{ width: "70%" }} /></div>
                        <div className="about-skill"><p>Kotlin</p><hr style={{ width: "65%" }} /></div>
                    </div> */}
                </div>
            </div>
            {/* {<div className="about-achievements">
                <div className="about-achievement">
                    <h1>10</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>15</h1>
                    <p>PROYECTS COMPLETED</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>18</h1>
                    <p>HAPPY CLIENTS</p>
                </div>
            </div>} */}
        </div>
    )
}

export default About