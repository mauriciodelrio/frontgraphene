// create a componenet about me splitted in two box with tailwind css
const About = () => {
    return (
        <div className="flex flex-wrap px-4 items-center md:justify-arround sm:justify-center max-w-2x1 sm:w:full">
            <div className="flex flex-col items-center w-full md:w-1/2 lg:w-1/2 p-4">
                <h1 className="text-center text-4xl font-bold text-orange-600 pb-4">Misión</h1>
                <p className="text-center text-sm text-gray-800 sm:text-justify">
                    Identificar y llevar a cabo una capacitación de programación completa para preparar a futuros juniors para el mercado laboral como programadores de alta calidad. Tomándsose el tiempo que sea necesario para que éstos se sientan seguros de aportar en una empresa real.
                </p>
            </div>
            <div className="flex flex-col items-left w-full md:w-1/2 lg:w-1/2 p-4">
                <h1 className="text-center text-4xl font-bold text-pink-600 pb-4">Un poco del creador</h1>
                <p className="text-center text-sm text-gray-800 sm:text-justify">
                    Soy una persona que se dedica a la programación y a la capacitación de programadores hace varios años. He detectado bastantes elementos que son complejos para futuros progrmaadores para enfrentar sus primeros desafíos laborales, esta propuesta está enfocada en minimizar estas dificultades y ayudar a los futuros programadores a desarrollar sus habilidades de forma completa y efectiva.
                </p>

            </div>
        </div>
    )
}

export default About;