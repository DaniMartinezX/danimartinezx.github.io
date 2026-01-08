import "./Experience.css";
import theme_pattern from '../../assets/theme_pattern.svg'


const experience = [
    {
        company: "Altia",
        role: "Técnico de software, nivel I",
        period: "Mayo 2024 – Actualidad",
        location: "A Coruña / Híbrido",
        summary:
            "Desarrollo de aplicaciones web para el sector logístico y creación de APIs basadas en microservicios. Participación directa con cliente para análisis funcional y definición de nuevas funcionalidades.",
        bullets: [
            "Desarrollo web con ASP .NET MVC y SQL Server",
            "Diseño e implementación de APIs y microservicios con .NET 8",
            "Reuniones con cliente para toma de requisitos y definición funcional",
            "Mantenimiento evolutivo y corrección de incidencias en producción",
        ],
        stack: ["ASP .NET MVC", ".NET 8", "SQL Server", "Microservicios", "APIs REST"],
        link: "https://www.altiacompany.com/"
    },
    {
        company: "Accenture",
        role: "Desarrollador de aplicaciones móviles",
        period: "Marzo 2023 – Junio 2023",
        location: "A Coruña / Presencial",
        summary:
            "Desarrollo de aplicaciones móviles multiplataforma y nativas, participando en la implementación de arquitectura, consumo de servicios e integración con servicios móviles.",
        bullets: [
            "Desarrollo de apps con Flutter y Android nativo con Kotlin",
            "Implementación de arquitectura MVVM e inyección de dependencias",
            "Consumo de APIs REST (Retrofit)",
            "Integración con Firebase y persistencia local con Room",
        ],
        stack: ["Flutter", "Kotlin", "MVVM", "Retrofit", "Firebase", "Room"],
        link: "https://www.accenture.com/es-es"
    }

];

export default function Experience() {
    return (
        <section className="experience" id="experience">
            <div className="experience-title">
                <h1>Experiencia Laboral</h1>
                <img src={theme_pattern} alt="" />
            </div>

            <div className="experience__list">
                {experience.map((item, idx) => (
                    <article className="experience__row" key={idx}>
                        {/* Left rail */}
                        <aside className="experience__rail">
                            <div className="experience__period">{item.period}</div>
                            <div className="experience__company">{item.company}</div>
                            {item.location ? (
                                <div className="experience__location">{item.location}</div>
                            ) : null}
                        </aside>

                        {/* Right card */}
                        <div className="experience__card">
                            <a key={idx} href={item.link} title={`Visitar la página web de ${item.company}`} className="experience__link" target="_blank" rel="noopener noreferrer">

                                <div className="experience__cardTop">
                                    <h3 className="experience__role">{item.role}</h3>

                                    {item.period.toLowerCase().includes("actualidad") ? (
                                        <span className="experience__badge">Actual</span>
                                    ) : null}
                                </div>

                                <p className="experience__summary">{item.summary}</p>

                                {item.bullets?.length ? (
                                    <ul className="experience__bullets">
                                        {item.bullets.map((b, i) => (
                                            <li key={i}>{b}</li>
                                        ))}
                                    </ul>
                                ) : null}

                                {item.stack?.length ? (
                                    <div className="experience__stack">
                                        {item.stack.map((t, i) => (
                                            <span className="experience__tag" key={i}>
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                ) : null}

                            </a>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
