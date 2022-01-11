// use tailwindcss/tailwind.css
import { useUser } from "@auth0/nextjs-auth0";

const Plans = ({ redirect }) => {
  const { user, loading } = useUser();
  console.log(user);
  return (
    <div id="plans">
      <h1 className="text-3xl leading-9 font-bold tracking-tight text-gray-800 sm:text-4xl sm:leading-10 p-8">
        Planes
      </h1>
      <div className="flex items-center justify-center w-full flex-1 sm:px-2 md:px-10 text-center">
        <p className="text-md text-center justify-center pb-8 text-gray-600 w-2/3">
          Pagas una vez y obtienes acceso de por vida a las prestaciones, puedes
          cambiar y actualizar tu plan cuando quieras. Puedes ver y consumir el contenido cuando quieras y cambiar la configuración de las pausas de tu plan.
        </p>
      </div>
      <div className="flex flex-group max-w-screen-lg bg-white rounded-lg mx-auto text-center py-12 mt-4 w-full mb-20">
        <div className="flex flex-wrap mx-8">
          <div className="w-full md:w-1/3 xl:w-1/3 p-2 flex flex-col">
            <a
              href={redirect}
              className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden"
            >
              <div className="relative pb-40 overflow-hidden">
                <img
                  className="absolute inset-0 object-cover"
                  src="/basicgr.svg"
                  alt=""
                />
              </div>
              <div className="p-2 text-center flex-1">
                <span className="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">
                  Reforzamiento teórico
                </span>
                <h2 className="mt-2 mb-2  font-bold">
                  Acceso al contenido teórico
                </h2>
                <p className="text-sm flex-1">
                  Puedes acceder a todo el contenido teórico del curso y algunos
                  ejercicios. Para adquirir
                  conocomientos de programación que no conocías.
                  <div className="mt-3 items-center text-center">
                    <div className="items-center text-center">CLP $25.000</div>
                  </div>
                </p>
              </div>
              <div className="p-2 border-t border-b text-xs text-indigo-700 flex-1">
                <span className="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">
                  {user ? "Ve a tu curso" : "inscríbete acá"}
                </span>
              </div>
            </a>
          </div>
          <div className="w-full sm:w-1/3 md:w-1/3 xl:w-1/3 p-2 flex flex-col">
            <a
              href={redirect}
              className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden"
            >
              <div className="relative pb-40 overflow-hidden">
                <img
                  className="absolute inset-0 object-cover"
                  src="/basicgr2.svg"
                  alt=""
                />
              </div>
              <div className="p-2 text-center flex-1">
                <span className="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">
                  Curso Full sin Certificación
                </span>
                <h2 className="mt-2 mb-2  font-bold">
                  Acceso al contenido teórico y práctico
                </h2>
                <p className="text-sm flex-1">
                  Puedes acceder a todo el contenido teórico y práctico del
                  curso, la certificación la puedes pagar una vez completes el
                  curso.
                  <div className="mt-3 items-center text-center">
                    <div className="items-center text-center">CLP $100.000</div>
                  </div>
                </p>
              </div>
              <div className="p-2 border-t border-b text-xs text-indigo-700 flex-1">
                <span className="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">
                  {user ? "Ve a tu curso" : "inscríbete acá"}
                </span>
              </div>
            </a>
          </div>
          <div className="w-full sm:w-1/3 md:w-1/3 xl:w-1/3 p-2 flex flex-col">
            <a
              href={redirect}
              className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden"
            >
              <div className="relative pb-40 overflow-hidden">
                <img
                  className="absolute inset-0 object-contain"
                  src="/basicgr3.svg"
                />
              </div>
              <div className="p-2 text-center flex-1">
                <span className="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">
                  Curso Full con certificación
                </span>
                <h2 className="mt-2 mb-2  font-bold">
                  Acceso al contenido teórico, práctico y certificación.
                </h2>
                <p className="text-sm flex-1">
                  Puedes acceder a todo el contenido teórico del curso, todos
                  los ejercicios y la certificación oficial del Edugraphene.
                  <div className="mt-3 items-center text-center">
                    <div className="items-center text-center">CLP $180.000</div>
                  </div>
                </p>
              </div>
              <div className="p-2 border-t border-b text-xs text-indigo-700 flex-1">
                <span className="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">
                  {user ? "Ve a tu curso" : "inscríbete acá"}
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;
