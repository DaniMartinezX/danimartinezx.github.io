import React from "react";
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const handleWorkClick = (index) => {
    const htmlFile = "work_" + (index + 1);
    window.open({ htmlFile }, '_blank');
}

const MyWork = () => {
    return (
        <div id="work" className="mywork">
            <div className="mywork-title">
                <h1>Mis últimos proyectos</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="mywork-container">
                {mywork_data.map((work, index) => {

                    let href;
                    if (work.w_linkend === null) {
                        href = work.w_full_link
                    } else {
                        href = `/works/work_${work.w_linkend}.html`
                    }

                    return <a key={index} title="Acceder al proyecto" href={href} target="_blank" className="mywork-format">
                        {work.new === true ? (
                            <span className="mywork-badge">¡Nuevo!</span>
                        ) : null}

                        <h1>{work.w_name}</h1>
                        <br></br>
                        <p>{work.w_des}</p>

                        {work.technologies_used?.length ? (
                            <ul className="mywork__bullets">
                                {work.technologies_used.map((b, i) => (
                                    <li key={i}>{b}</li>
                                ))}
                            </ul>
                        ) : null}

                    </a>
                })}
            </div>
            {/* <div className="services-readmore">
                    <p>Leer Más</p>
                    <img src={arrow_icon} alt="" />
                </div> */}
            {/* <div className="mywork-container">
                {mywork_data.map((work, index) => {
                    return <img key={index} src={work.w_img} alt="" />
                })}
            </div>
            <div className="mywork-showmore">
                <p>Más</p>
                <img src={arrow_icon} alt="" />
            </div> */}
        </div>
    )
}

export default MyWork