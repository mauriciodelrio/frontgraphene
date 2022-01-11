import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import Plans from "../components/Plans";
import StepsCourse from "../components/StepsCourse";
import About from "../components/About";

export default function Home() {
  return (
    <div className="flex flex-col items-center sm:w-full justify-center min-h-screen py-2">
      <NavBar />
      <main className="flex flex-col items-center justify-center w-full flex-1 sm:px-2 md:px-10 text-center">
        <div className="flex flex-wrap flex-col justify-around max-w-4xl sm:w-full">
          <div className="rounded-lg text-center pt-12 mt-4 w-full mb-10 bg-logo">
            <h2 className="text-4xl leading-9 font-bold tracking-tight text-gray-800 sm:text-4xl sm:leading-10 pb-4">
              Comienza tu portafolio ahora mismo
            </h2>
            <div className="flex flex-col w-full p-4">
              <h3 className="text-center text-4xl font-bold text-orange-600 pb-4">
                ¿Qué es Edugraphene?
              </h3>
              <p className="mt-2 text-base leading-6 text-gray-500">
                Edugraphene es una plataforma de aprendizaje en línea que te
                permite aprender de forma correcta en una duración que no
                superará los 8 meses de aprendizaje para que salgas al mercado
                profesional como un desarrollador FullStack Jr bien preparado.
                es muy importante destacar que estas herramientas son tu camino inicial a encuntrar un empleo como Jr FullStack, el esfuerzo y el trabajo no será monitoreado y depaenderá solamente de tí.
              </p>
              <div className=" flex justify-center rounded-md bg-pink-500 shadow content-center mt-6 w-full text-center items-center">
                <a
                  href="#plans"
                  className="text-gray-100 font-bold py-2 px-6 items-center content-center self-center"
                >
                  Ve nuestros planes
                </a>
              </div>
            </div>
            <div className="flex flex-col p-4">
              <h3 className="text-center text-4xl font-bold text-pink-600 pt-12 pb-4">
                ¿Cómo funciona?
              </h3>
              <p className="mt-2 text-base leading-6 text-gray-500">
                Solamente debes ver los planes de pago, la primera modalidad es
                enfocado a la teoría y personas que quieren reforzar
                conocimientos, los siguientes planes desbloquean todos los
                contenidos, pero la última fase es la certificación oficial por
                EduGraphene.

                La certificación te entrega una validación de tu aprendizaje y tu estudio en el curso,
                para obtener la certificación es necesario entender que se deben completar todos los ejercicios y desafíos.

                Los otros planes también incluyen la validación de los ejercicios y desafíos, pero no es necesario completarlos todos, puesto que serán requeridos para el certificado solamente.
              </p>
              <div className=" flex justify-center align-center rounded-md bg-pink-500 shadow content-center mt-6 w-full">
                <a
                  href="/api/auth/login"
                  className="text-gray-100 font-bold py-2 px-6 justify-center content-center self-center"
                >
                  Comenzar
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-around max-w-4xl mt-6 sm:w-full">
          <About />
        </div>
        <Plans redirect={"/api/auth/login"} />
        <StepsCourse />
      </main>
      <Footer />
    </div>
  );
}
