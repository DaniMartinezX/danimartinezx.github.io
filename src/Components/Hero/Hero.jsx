import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
import perfil_sinfondo from '../../assets/perfil_sinfondo_mod.png'
import img_eje from '../../assets/ejemplo_img.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Link } from 'react-router-dom';

const Hero = () => {

    return (
        <div id='home' className='hero'>
            <a title='Visita mi Linkedin'
                target='_blank'
                rel="noopener noreferrer"
                href='https://www.linkedin.com/in/danielmartinezcarreira/'
                onClick={() =>
                    window.gtag?.("event", "click_linkedin", {
                        event_category: "engagement",
                        event_label: "Linkedin Profile",
                    })
                }>
                <img src={perfil_sinfondo} alt="" />
            </a>
            <h1><span>Soy Daniel Martínez,</span> <br></br>.NET Developer | IA | Big Data</h1>
            <p>Sistemas escalables, arquitecturas .NET y soluciones Big Data</p>
            <p>A Coruña, España</p>
            <div className="hero-action">
                <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Conecta conmigo</AnchorLink></div>
                <a href="https://drive.google.com/file/d/1L284Wydx1ahXhgTcO5wPySEakrtnqgV9/view?usp=sharing"
                    target="_blank"
                    className="hero-resume"
                    onClick={() =>
                        window.gtag?.("event", "click_CV", {
                            event_category: "engagement",
                            event_label: "CV",
                        })
                    } >Mi currículum</a>
            </div>
        </div>
    )
}

export default Hero