import project1_img from '../assets/project_1.svg'
import project2_img from '../assets/project_2.svg'
import project3_img from '../assets/project_3.svg'
import project4_img from '../assets/project_4.svg'
import project5_img from '../assets/project_5.svg'
import project6_img from '../assets/project_6.svg'


// Si el full_link contiene valor, en enlace al proyecto es el dominio completo del valor; sinó, se añade el sufijo de w_linkend al prefijo de MyWork.jsx
const mywork_data = [
    {
        w_no: 1,
        w_name: "Licitaciones Coruña a tu alcance: Extracción y gestión de datos con Selenium y SQL Server",
        w_des: "Scraping con Selenium datos de licitaciones del concello de A Coruña y posterior carga de datos en una BBDD a Microsoft SQL Server.",
        w_linkend: "licitaciones_corunha",
        w_full_link: null
    },
    {
        w_no: 2,
        w_name: "COVID Italia: Desvelando datos con Pandas, MongoDB y SeaBorn",
        w_des: "Análisis y visualización de datos del COVID de Italia utilizando Pandas, MongoDB y SeaBorn.",
        w_linkend: "covid_italia",
        w_full_link: null
    },
    {
        w_no: 3,
        w_name: "Noticias al desnudo: Extracción, análisis y visualización de titulares",
        w_des: "Scraping de medios digitales de varios medios, análisis de datos, escritura de un fichero HTML ordenado por peso de los titulares según las palabras relevantes.",
        w_linkend: "noticias_al_segundo",
        w_full_link: null
    },
    {
        w_no: 4,
        w_name: "El chef digital: Una app de recetas Android con MVVM, Dagger Hilt y Retrofit",
        w_des: "Desarrollo de app nativa Android con Kotlin sobre recetas de cocina, implementando en ella inyección de dependencias Dagger Hilt, servicios Firebase, ROOM, arquitectura MVVM y consumo de API REST con Retrofit.",
        w_linkend: null,
        w_full_link: "https://github.com/DaniMartinezX/Meals-app"
    },
]

export default mywork_data;