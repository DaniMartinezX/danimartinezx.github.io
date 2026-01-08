import React from "react";
import './Footer.css'
import footer_logo from '../../assets/logo.jpg'
// import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-top">
                <div className="footer-top-left">
                    <img src={footer_logo} alt="" />
                    <p>Software Developer</p>
                </div>
                {/* <div className="footer-top-right">
                    <div className="footer-email-input">
                        <img src={user_icon} alt="" />
                        <input type="email" placeholder="Escribe tu email" />
                    </div>
                    <div className="footer-subscribe">Subscríbete</div>
                </div> */}
            </div>
            <hr />
            <div className="footer-bottom">
                <p className="footer-bottom-left">© {new Date().getFullYear()} Daniel Martínez. Esta web utiliza analítica básica (Google Analytics) para medir visitas y clics.</p>
                {/* <div className="footer-bottom-right">
                    <p>Término de servicios</p>
                    <p>Política de privacidad</p>
                    <p>Conecta conmigo</p>
                </div> */}
            </div>
        </div>
    )
}

export default Footer