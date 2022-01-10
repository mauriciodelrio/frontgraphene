import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import Plans from "../components/Plans";
import StepsCourse from "../components/StepsCourse";

export default function Home() {
  return (
    <div className="flex flex-col items-center sm:w-full justify-center min-h-screen py-2">
      <NavBar />
      <main className="flex flex-col items-center justify-center w-full flex-1 sm:px-2 md:px-10 text-center">
        <div className="max-w-screen-lg bg-white rounded-lg mx-auto text-center py-12 mt-4 w-full mb-20">
          <h2 className="text-3xl leading-9 font-bold tracking-tight text-gray-800 sm:text-4xl sm:leading-10">
            Comienza tu portafolio ahora mismo
          </h2>
          <div className="mt-8 flex justify-center align-center items-center">
            <img src="carbon2.svg" alt="carbon2" className="w-48 h-48 flex justify-center mx-auto" />
          </div>
          <div className="grid grid-cols-2 gap-4 pt-8">
            <div>
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                ¿Qué es Edugraphene?
              </h3>
              <p className="mt-2 text-base leading-6 text-gray-500">
                Edugraphene es una plataforma de aprendizaje en línea que te
                permite aprender de forma correcta en una duración que no superará los 8 meses de aprendizaje para que salgas al mercado profesional como un Jr bien preparado.
              </p>
            </div>
            <div>
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                ¿Cómo funciona?
              </h3>
              <p className="mt-2 text-base leading-6 text-gray-500">
                Solamente debes ver los planes de pago, la primera modalidad es enfocado a la teoría y personas que quieren reforzar conocimientos, los siguientes planes desbloquean todos los contenidos, pero la última fase es la certificación oficial por EduGraphene.
              </p>
            </div>
            <div className="mx-4 flex justify-center rounded-md bg-pink-500 shadow content-center">
              <a href="/api/auth/login" className="text-gray-200 font-bold py-2 px-6 justify-center content-center">
                Ve nuestros planes
              </a>
            </div>
            <div className="mx-4 flex justify-center rounded-md bg-pink-500 shadow content-center">
              <a href="/api/auth/login" className="text-gray-200 font-bold py-2 px-6 justify-center content-center">
                Comenzar
              </a>
            </div>
          </div>
        </div>
        <Plans redirect={"/login"} />
        <StepsCourse></StepsCourse>
      </main>
      <Footer />
    </div>
  );
}
