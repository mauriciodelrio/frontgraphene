// using tailwind list of steps and courses
import LearnBox from "./LearnBox";
import { useState } from "react";
import Steps from "./Steps";
const StepsCourse = ({ steps, courses, global }) => {
    const [step, setStep] = useState(0);
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-8">
        <h1 className="text-3xl font-bold mb-2 text-center justify-center pb-8 text-gray-800">
          Estructura del curso
        </h1>
        <div className="flex flex-col items-center justify-center w-full flex-1 sm:px-2 md:px-10 text-center">
          <p className="text-md font-semibold text-center justify-center pb-8 text-gray-600">
            Esta es una aproximación de la estructura del curso que verás para
            ser un programador de talla mundial
          </p>
        </div>
        <div className="container mx-auto py-6">
          <div className="flex" id="ProgressStepper">
            <div className="w-1/5 cursor-pointer" onClick={()=> {setStep(0)}}>
              <div className="relative mb-2">
                <div className={`w-10 h-10 mx-auto ${step >= 0 && 'bg-green-500'} rounded-full text-lg text-white flex items-center`}>
                  <span className="text-center text-white w-full">1</span>
                </div>
              </div>

              <div className="text-xs text-center 2xl:text-base">
                Conceptos básicos
              </div>
            </div>

            <div className="w-1/5 cursor-pointer" onClick={()=> {setStep(1)}}>
              <div className="relative mb-2">
                <div
                  className="absolute flex align-center items-center align-middle content-center"
                  // style={{
                  //   width: "calc(100% - 2.5rem - 1rem)",
                  //   top: "50%",
                  //   transform: "translate(-50%, -50%)",
                  // }}
                >
                  <div className="w-full bg-gray-200 rounded items-center align-middle align-center flex-1">
                    <div className="w-0 bg-green-300 py-1 rounded"></div>
                  </div>
                </div>

                <div className={`w-10 h-10 mx-auto ${step >= 1 ? 'bg-green-500' : 'bg-gray-400'} rounded-full text-lg text-white flex items-center`}>
                  <span className="text-center text-white w-full">2</span>
                </div>
              </div>

              <div className="text-xs text-center 2xl:text-base">
                Camino a la programación
              </div>
            </div>

            <div className="w-1/5 cursor-pointer" onClick={()=> {setStep(2)}}>
              <div className="relative mb-2">
                <div
                  className="absolute flex align-center items-center align-middle content-center"
                  // style={{
                  //   width: "calc(100% - 2.5rem - 1rem)",
                  //   top: "50%",
                  //   transform: "translate(-50%, -50%)",
                  // }}
                >
                  <div className="w-full bg-gray-200 rounded items-center align-middle align-center flex-1">
                    <div className="w-0 bg-green-300 py-1 rounded"></div>
                  </div>
                </div>

                <div className={`w-10 h-10 mx-auto ${step >= 2 ? 'bg-green-500' : 'bg-gray-400'} rounded-full text-lg text-white flex items-center`}>
                  <span className="text-center  w-full">3</span>
                </div>
              </div>

              <div className="text-xs text-center 2xl:text-base">
                Organización y backend
              </div>
            </div>
            <div className="w-1/5 cursor-pointer" onClick={()=> {setStep(3)}}>
              <div className="relative mb-2">
                <div
                  className="absolute flex align-center items-center align-middle content-center"
                  // style={{
                  //   width: "calc(100% - 2.5rem - 1rem)",
                  //   top: "50%",
                  //   transform: "translate(-50%, -50%)",
                  // }}
                >
                  <div className="w-full bg-gray-200 rounded items-center align-middle align-center flex-1">
                    <div className="w-0 bg-green-300 py-1 rounded"></div>
                  </div>
                </div>

                <div className={`w-10 h-10 mx-auto ${step >= 3 ? 'bg-green-500' : 'bg-gray-400'} rounded-full text-lg text-white flex items-center`}>
                  <span className="text-center  w-full">4</span>
                </div>
              </div>

              <div className="text-xs text-center 2xl:text-base">
                Frontend y UI/UX
              </div>
            </div>
            <div className="w-1/5 cursor-pointer" onClick={()=> {setStep(4)}}>
              <div className="relative mb-2">
                <div
                  className="absolute flex align-center items-center align-middle content-center"
                  // style={{
                  //   width: "calc(100% - 2.5rem - 1rem)",
                  //   top: "50%",
                  //   transform: "translate(-50%, -50%)",
                  // }}
                >
                  <div className="w-full bg-gray-200 rounded items-center align-middle align-center flex-1">
                    <div className="w-0 bg-green-300 py-1 rounded"></div>
                  </div>
                </div>

                <div className={`w-10 h-10 mx-auto ${step >= 4 ? 'bg-green-500' : 'bg-gray-400'} rounded-full text-lg text-white flex items-center`}>
                  <span className="text-center  w-full">5</span>
                </div>
              </div>

              <div className="text-xs text-center 2xl:text-base">
                Testing
              </div>
            </div>
          </div>
        </div>
        { <LearnBox option={step} data={Steps}></LearnBox> }
      </div>
    </>
  );
};

export default StepsCourse;
