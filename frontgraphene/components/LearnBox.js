const LearnBox = ({ option, data }) => {
  const rendering = data?.data[option]?.steps?.map((step, index) => {
    return (
      <div className="flex flex-col justify-center m-auto mb-4" key={index}>
        <div
          className={`flex md:flex-row flex-col bg-${step.color}-200 justify-center md:text-left text-center`}
        >
          <div className="flex flex-col justify-center items-center relative">
            <div className="w-56 h-12 md:flex hidden justify-center">
              <div className={`h-full  border-${step.color}-300 border-dashed`}></div>
            </div>
            <div className={`rounded-full w-12 h-12 text-xl text-${step.color}-100 bg-${step.color}-700 font-black flex justify-center items-center absolute top-0 right-0 mt-16 shadow-lg mr-2`}>
              {index + 1}
            </div>
            <div className={`w-full h-full flex justify-center items-center text-${step.color}-600`}>
                {step.icon}
            </div>
            <div className="w-56 h-12 md:flex hidden justify-center">
              <div className={`h-full border-r-4 border-${step.color}-300 border-dashed`}></div>
            </div>
          </div>
          <div className={` p-10 flex flex-col justify-center max-w-2xl rounded bg-${step.color}-200`}>
            <div className={`text-xs uppercase font-bold text-${step.color}-500`}>
              {step.header_step}
            </div>
            <div className={`md:text-3xl text-xl font-bold text-${step.color}-700`}>
              {step.title}
            </div>
            <div className={`mt-4 text-${step.color}-800`}>{step.description}</div>
          </div>
        </div>
      </div>
    );
  });
  return <div className="flex flex-col justify-center m-auto">{rendering}</div>;
};
export default LearnBox;
