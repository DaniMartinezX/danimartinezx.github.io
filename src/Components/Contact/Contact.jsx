import React from "react";
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "bb49b8cf-e319-4cca-80d9-6f2f1f333bb3");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            alert(res.message);
        }
    };

    return (
        <div id="contact" className="contact">
            <div className="contact-title">
                <h1>Contacta conmigo</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Hablemos :)</h1>
                    <p>En este momento me encuentro trabajando, pero escucho ofertas que supongan un desafío técnico o una evolución profesional. Si crees que mi perfil encaja en tu equipo, estaré encantado de charlar contigo. <br></br><br></br> <strong>Contesto en menos de 24 horas</strong></p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="" /><p>danielmartinezcarreira@gmail.com</p>
                        </div>
                        {/* <div className="contact-detail">
                            <img src={call_icon} alt="" /><p>+34 622 18 43 56</p>
                        </div> */}
                        <div className="contact-detail">
                            <img src={location_icon} alt="" /><p>A Coruña, España</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className="contact-right">
                    <label htmlFor="">Tu nombre</label>
                    <input type="text" placeholder="Escribe tu nombre" name="name" />
                    <label htmlFor="">Tu email</label>
                    <input type="email" placeholder="Escribe tu correo" name="email" />
                    <label htmlFor="">Escribe tu mensaje aquí</label>
                    <textarea name="message" rows="8" placeholder='Escribe tu mensaje'></textarea>
                    <button type='submit' className="contact-submit">Enviar ahora</button>
                </form>
            </div>
        </div>
    )
}

export default Contact