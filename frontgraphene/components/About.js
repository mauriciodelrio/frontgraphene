// create a componenet about me splitted in two box with tailwind css
import { faFlag } from "@fortawesome/free-solid-svg-icons";
const About = () => {
    return (
        <div className="flex flex-wrap px-4 items-center md:justify-arround sm:justify-center max-w-2x1 sm:w:full">
            <div className="flex flex-col items-center w-full md:w-1/2 lg:w-1/2 p-4">
                <h1 className="text-center text-4xl font-bold text-gray-600">About Me</h1>
                <p className="text-center text-sm text-gray-800 sm:text-justify">
                    I am a full stack developer with a passion for learning new technologies and solving problems.

                    In my career I have worked with a wide range of technologies and languages, like JavaScript mainly, and also with Python too.
                    I am currently working in a company called <a href="https://www.1health.io" target={'_blank'} className="text-blue-600">1health</a> as a tech lead in patient service.
                    I am always looking for new opportunities to learn and grow.
                    Try to get on board new technologies and metodologies to apply them in passionate projects. 
                    I am also looking for a job in a company that is willing to relocate me if it's possible.
                </p>
            </div>
            <div className="flex flex-col items-left w-full md:w-1/2 lg:w-1/2 p-4">
                <h1 className="text-center text-4xl font-bold text-gray-600 pb-4">Salary Range</h1>
                <span className="text-center text-lg font-bold text-green-600 pb-2">
                    $85,000 to $130,000 Yearly
                </span>
                <span className="text-center text-lg font-semibold text-gray-600 pb-2">
                    Open to relocation to possibles countries:
                </span>
                <span className="text-center text-md font-bold text-indigo-600">
                    Canada <span role="img" aria-label="ca">🇨🇦</span>
                </span>
                <span className="text-center text-md font-bold text-indigo-600">
                    New Zealand <span role="img" aria-label="nz">🇳🇿</span>
                </span>
                <span className="text-center text-md font-bold text-indigo-600">
                    Northend Europe <span role="img" aria-label="eu">🇪🇺</span>
                </span>
                <span className="text-center text-md font-bold text-indigo-600">
                    England <span role="img" aria-label="en">🇬🇧</span>
                </span>

            </div>
        </div>
    )
}

export default About;