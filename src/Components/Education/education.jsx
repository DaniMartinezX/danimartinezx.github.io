import "./Education.css";
import { useState } from "react";
import theme_pattern from '../../assets/theme_pattern.svg'

const education = [
    {
        title: "Máster en Inteligencia Artificial (E.III)",
        institution: "Formación especializada en IA aplicada",
        period: "2024 – 2025",
        description:
            "Máster práctico orientado a la aplicación real de la IA en entornos profesionales. Calificación final: 9,4.",
        highlights: [
            "LLMs avanzados (local y cloud): uso y evaluación de modelos como ChatGPT y Grok",
            "Productividad con IA: aplicaciones en ofimática, generación de contenidos y marketing",
            "Automatización y desarrollo: flujos con Make y n8n, integración con Assistant API",
            "IA para imagen, vídeo y voz: avatares digitales, generación y clonación de voz, IA audiovisual",
            "IA aplicada a negocio: análisis de mercado B2C/B2B, SEO/SEM con IA, redes sociales y email marketing",
        ],
        tags: [
            "IA aplicada",
            "LLMs",
            "Automatización",
            "Assistant API",
            "Marketing con IA",
            "SEO/SEM",
        ],
    }
    ,
    {
        title: "Curso de Especialización en Inteligencia Artificial y Big Data",
        institution: "IES Fernando Wirtz Suárez · Xunta de Galicia",
        period: "2023 – 2024",
        description:
            "Curso de especialización oficial enfocado al análisis avanzado de datos y al desarrollo de soluciones basadas en Inteligencia Artificial, combinando técnicas de Big Data, Machine Learning y Deep Learning aplicadas a entornos reales.",
        highlights: [
            "Análisis, tratamiento y visualización de grandes volúmenes de datos",
            "Diseño y entrenamiento de modelos de Machine Learning y Deep Learning",
            "Procesamiento de datos estructurados y no estructurados",
            "Uso de técnicas de IA para la toma de decisiones y predicción",
            "Introducción a arquitecturas Big Data y flujos de datos",
            "Aplicación de IA en casos reales orientados a negocio",
        ],
        tags: [
            "Inteligencia Artificial",
            "Big Data",
            "Machine Learning",
            "Deep Learning",
            "Análisis de Datos",
            "Modelado Predictivo",
        ],
    }
    ,
    {
        title: "Técnico Superior en Desarrollo de Aplicaciones Multiplataforma (DAM)",
        institution: "Chíos Formación, A Coruña",
        period: "2021 – 2023",
        description:
            "Formación enfocada en el desarrollo de aplicaciones web y multiplataforma, bases de datos y buenas prácticas de software.",
        highlights: [
            "Desarrollo de aplicaciones web y multiplataforma con enfoque en arquitectura y mantenibilidad",
            "Programación orientada a objetos y principios SOLID",
            "Diseño y gestión de bases de datos relacionales (modelado, consultas y optimización)",
            "Consumo y desarrollo de APIs REST",
            "Control de versiones con Git y trabajo colaborativo",
            "Introducción a metodologías ágiles y ciclo de vida del software",
        ],

        tags: ["Backend", "Frontend", "Software", "BBDD"],
    },
];


export default function Education() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex((prev) => (prev === index ? null : index));
    };

    return (
        <section className="education" id="education">
            <div className="education-title">
                <h1>Formación académica</h1>
                <img src={theme_pattern} alt="" />
            </div>

            <div className="education-timeline">
                {education.map((item, index) => {
                    const isOpen = openIndex === index;
                    const hasHighlights = item.highlights?.length;

                    return (
                        <div className="education-item" key={index}>
                            <div className="education-card">
                                <div className="education-header">
                                    <h3>{item.title}</h3>
                                    <span className="education-period">{item.period}</span>
                                </div>

                                <span className="education-institution">{item.institution}</span>

                                <p className="education-description">{item.description}</p>

                                {hasHighlights ? (
                                    <div className="education-collapse">
                                        <button
                                            type="button"
                                            className="education-toggle"
                                            onClick={() => toggle(index)}
                                            aria-expanded={isOpen}
                                            aria-controls={`edu-highlights-${index}`}
                                        >
                                            {isOpen ? "Ocultar contenidos" : "Ver contenidos"}
                                            <span
                                                className={`education-toggleIcon ${isOpen ? "is-open" : ""
                                                    }`}
                                                aria-hidden="true"
                                            >
                                                ▾
                                            </span>
                                        </button>

                                        <div
                                            id={`edu-highlights-${index}`}
                                            className={`education-panel ${isOpen ? "is-open" : ""
                                                }`}
                                        >
                                            <ul className="education-highlights">
                                                {item.highlights.map((h, i) => (
                                                    <li key={i}>{h}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                ) : null}

                                <div className="education-tags">
                                    {item.tags.map((tag, i) => (
                                        <span className="education-tag" key={i}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
