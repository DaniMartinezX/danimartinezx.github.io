import "./Education.css";

const education = [
    {
        title: "Máster en Inteligencia Artificial (E.III)",
        institution: "BIG School",
        period: "2024 – 2025",
        description:
            "Máster práctico y orientado al uso profesional de la Inteligencia Artificial. Formación centrada en la aplicación real de la IA en automatización, negocio, marketing y desarrollo, con una calificación final de 9,4.",
        tags: [
            "LLMs",
            "IA aplicada",
            "Automatización",
            "Marketing con IA",
            "Assistant API"
        ],
    },
    {
        title: "Curso de Especialización en Inteligencia Artificial y Big Data",
        institution: "IES Fernando Wirtz Suárez, A Coruña",
        period: "2023 – 2024",
        description:
            "Especialización orientada al análisis de datos, machine learning, deep learning y desarrollo de soluciones basadas en datos.",
        tags: ["IA", "Big Data", "Machine Learning", "Deep Learning"],
    },
    {
        title: "Técnico Superior en Desarrollo de Aplicaciones Multiplataforma (DAM)",
        institution: "Chíos Formación, A Coruña",
        period: "2021 – 2023",
        description:
            "Formación enfocada en el desarrollo de aplicaciones web y multiplataforma, bases de datos y buenas prácticas de software.",
        tags: ["Backend", "Frontend", "Software", "BBDD"],
    },
];

export default function Education() {
    return (
        <section className="education">
            <h2 className="education-title">Formación académica</h2>

            <div className="education-timeline">
                {education.map((item, index) => (
                    <div className="education-item" key={index}>

                        <div className="education-card">
                            <div className="education-header">
                                <h3>{item.title}</h3>
                                <span className="education-period">{item.period}</span>
                            </div>

                            <span className="education-institution">
                                {item.institution}
                            </span>

                            <p className="education-description">
                                {item.description}
                            </p>

                            <div className="education-tags">
                                {item.tags.map((tag, i) => (
                                    <span className="education-tag" key={i}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
