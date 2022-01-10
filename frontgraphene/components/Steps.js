import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faQuestion, faPlus, faBezierCurve , faDatabase, faTasks, faStickyNote, faCloud, faLaptopCode, faFlask, faCheck, faClipboardCheck} from "@fortawesome/free-solid-svg-icons"
import { faPython, faGit, faHtml5, faBootstrap, faReact } from "@fortawesome/free-brands-svg-icons"
const Steps = {
    data: [
        {
            belongs_to: "basics",
            steps: [
                {
                    title: "¿Por qué estamos aquí",
                    description: "Definimos nuestro propósito del curso y las metas que se van a alcanzar durante el trayecto del curso",
                    icon: <FontAwesomeIcon icon={faQuestion} size="4x" />,
                    header_step: "Paso 1",
                    color: "teal",
                    order: 1,
                },
                {
                    title: "Matemática en la computación",
                    description: "Aprende a resolver problemas matemáticos en la computación, además de repasar conceptos fundamentales que se pueden ocupar en divarsas aplicaciones, aritmética, algebra, cálculo, geometría, ecuaciones, etc.",
                    icon: <FontAwesomeIcon icon={faPlus} size="4x" />,
                    header_step: "paso 2",
                    color: "blue",
                    order: 2,
                },
                {
                    title: "Python 101",
                    description: "Aprenderás a programar en Python, un lenguaje de programación que se utiliza en la computación, y que es muy popular en la industria.",
                    icon: <FontAwesomeIcon icon={faPython} size="4x" />,
                    header_step: "paso 3",
                    color: "orange",
                    order: 3,
                },
                {
                    title: "Uso de la terminal y control de versiones",
                    description: "Aprenderás a usar Shell, bash, y git, para controlar tu trabajo y mantener un control de versiones.",
                    icon: <FontAwesomeIcon icon={faGit} size="4x" />,
                    header_step: "paso 4",
                    color: "pink",
                    order: 4,
                },
            ]
        },
        {
            belongs_to: "ISW",
            steps: [
                {
                    title: "Orientación a objetos",
                    description: "Aprenderás a crear clases y objetos, para poder crear programas que sean más eficientes y sean más fáciles de mantener. Usarás python para la definición de objetos",
                    icon: <FontAwesomeIcon icon={faPython} size="4x" />,
                    header_step: "paso 1",
                    color: "teal",
                    order: 1,
                },
                {
                    title: "Paradigmas de programación",
                    description: "Aprenderás a reconocer los diferentes paradigmas de programación, y a usarlos para crear programas más eficientes respetando el paradigma en cuestión de una forma teórica",
                    icon: <FontAwesomeIcon icon={faBezierCurve} size="4x" />,
                    header_step: "paso 2",
                    color: "blue",
                    order: 2,
                },
                {
                    title: "Bases de Datos",
                    description: "Aprenderás a crear bases de datos, y a utilizarlas para almacenar y recuperar información. Trabajaremos con postgresql, una base de datos relacional, que se utiliza en la mayoría de las aplicaciones de la industria.",
                    icon: <FontAwesomeIcon icon={faDatabase} size="4x" />,
                    header_step: "paso 3",
                    color: "orange",
                    order: 3,
                },
                {
                    title: "Fudamentos de ingeniería de software",
                    description: "Aprenderás a crear modelos y toma de requerimientos para crear software, y a utilizarlos para crear software más eficiente y más fácil de mantener.",
                    icon: <FontAwesomeIcon icon={faTasks} size="4x" />,
                    header_step: "paso 4",
                    color: "pink",
                    order: 4,
                },
            ]
        },
        {
            belongs_to: "Metodologías",
            steps: [
                {
                    title: "Metodologías de trabajo",
                    description: "Aprenderás a utilizar las metodologías de trabajo para crear software, metodologías clásicas y modernas, escalabilidad e incrementalidad.",
                    icon: <FontAwesomeIcon icon={faStickyNote} size="4x" />,
                    header_step: "paso 1",
                    color: "teal",
                    order: 1,
                },
                {
                    title: "Modelos de software",
                    description: "Aprenderás a crear modelos de software escalables usando bases de datos y APIs con python Flask",
                    icon: <FontAwesomeIcon icon={faFlask} size="4x" />,
                    header_step: "paso 2",
                    color: "blue",
                    order: 2,
                },
                {
                    title: "Servicios de datos y cloud computing",
                    description: "Aprenderás a subir tus servicios a diversas nubes de computación, configurar y administrar tus servicios para dar complejidad a tus soluciones",
                    icon: <FontAwesomeIcon icon={faCloud} size="4x" />,
                    header_step: "paso 3",
                    color: "orange",
                    order: 3,
                },
                {
                    title: "Desafío 1: Api rest en la Nube",
                    description: "Crearás una Api REST en la nube con los conceptos enseñados, el curso se bloqueará por algunas semanas para darte tiempo de digerir todo lo aprendido.",
                    icon: <FontAwesomeIcon icon={faLaptopCode} size="4x" />,
                    header_step: "paso 4",
                    color: "pink",
                    order: 4,
                },
            ]
        },
        {
            belongs_to: "Frontend",
            steps: [
                {
                    title: "Lo visual de una aplicación web",
                    description: "Aprenderás HTML, CSS para crear aplicaciones web estáticas sencillas y hermosas de visualizar",
                    icon: <FontAwesomeIcon icon={faHtml5} size="4x" />,
                    header_step: "paso 1",
                    color: "teal",
                    order: 1,
                },
                {
                    title: "UI/UX y diseño de interfaces",
                    description: "Aprenderás conceptos ligados a UI y UX, además conocerás herramientas que te permitan crear componentes de forma dinámica.",
                    icon: <FontAwesomeIcon icon={faBootstrap} size="4x" />,
                    header_step: "paso 2",
                    color: "blue",
                    order: 2,
                },
                {
                    title: "Javascript - React",
                    description: "Acá veremos el lenguaje javascript y como darle vida a nuestras aplicaciones con react y redux",
                    icon: <FontAwesomeIcon icon={faReact} size="4x" />,
                    header_step: "paso 3",
                    color: "orange",
                    order: 3,
                },
                {
                    title: "Proyecto: Frontend para API REST previa",
                    description: "Crearás una interfaz de usuario para la api rest construída anteriormente con todo lo enseñado en esta sección, el curso se bloqueará por unas semanas para que puedas trabajar tranquilo en tu proyecto.",
                    icon: <FontAwesomeIcon icon={faLaptopCode} size="4x" />,
                    header_step: "paso 4",
                    color: "pink",
                    order: 4,
                },
            ]
        },
        {
            belongs_to: "Future",
            steps: [
                {
                    title: "Conceptos de Testing",
                    description: "Aprenderás la importancia y la teoría de las pruebas unitarias y de integración, para poder crear software más robusto y más fácil de mantener.",
                    icon: <FontAwesomeIcon icon={faCheck} size="4x" />,
                    header_step: "paso 1",
                    color: "teal",
                    order: 1,
                },
                {
                    title: "Pytest - testing en backend",
                    description: "Aprenderás a usar la librería pytest para crear testing en backend, y a utilizarla para crear diversos escenarios de prueba de integración, end to end (e2e) y unitarias.",
                    icon: <FontAwesomeIcon icon={faPython} size="4x" />,
                    header_step: "paso 2",
                    color: "blue",
                    order: 2,
                },
                {
                    title: "Cypress - testing en frontend",
                    description: "Aprenderás a usar la librería cypress para crear testing en frontend, y a utilizarla para crear diversos escenarios de prueba de integración, end to end (e2e) y unitarias.",
                    icon: <FontAwesomeIcon icon={faReact} size="4x" />,
                    header_step: "paso 3",
                    color: "orange",
                    order: 3,
                },
                {
                    title: "Proyecto: Definición de pruebas para nuestro proyecto",
                    description: "Definirás las pruebas usando las librerías enteriores para los flujos críticos evaluados en tu proyecto final del portafolio, utilizarás pruebas unitarias, de interfaces, de integración y de end to end (e2e) para evaluar tu proyecto final.",
                    icon: <FontAwesomeIcon icon={faClipboardCheck} size="4x" />,
                    header_step: "paso 4",
                    color: "pink",
                    order: 4,
                },
            ]
        }
    ]
}

export default Steps;