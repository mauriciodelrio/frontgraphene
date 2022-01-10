// use tailwindcss/tailwind.css
import { useUser } from "@auth0/nextjs-auth0";

const Plans = ({ redirect }) => {
  const { user, loading } = useUser();
  console.log(user);
  return (
    <>
      <h1 className="text-3xl font-bold mb-2 text-center justify-center pb-8 text-gray-800">
        Planes
      </h1>
      <div className="flex flex-col items-center justify-center w-full flex-1 sm:px-2 md:px-10 text-center">
        <p className="text-md font-semibold text-center justify-center pb-8 text-gray-600">
          Pagas una vez y obtienes acceso de por vida a las prestaciones, puedes
          cambiar y actualizar tu plan cuando quieras.
        </p>
      </div>
      <div className="container mx-auto">
        <div className="flex flex-wrap mx-8">
          <div className="w-full md:w-1/3 xl:w-1/3 p-4 h-3/6">
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
              <div className="p-4 text-center">
                <span className="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">
                  Reforzamiento teórico
                </span>
                <h2 className="mt-2 mb-2  font-bold">
                  Acceso al contenido teórico
                </h2>
                <p className="text-sm">
                  Puedes acceder a todo el contenido teórico del curso y algunos
                  ejercicios. para perfeccionar tus habilidades o adquirir
                  conocomientos de programación que no conocías.
                </p>
                <div className="mt-3 items-center text-center">
                  <div className="items-center text-center">CLP $25.000</div>
                </div>
              </div>
              <div className="p-4 border-t border-b text-xs text-indigo-700">
                <span className="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">
                  {user ? "Ve a tu curso" : "inscríbete acá"}
                </span>
              </div>
            </a>
          </div>
          <div className="w-full sm:w-1/3 md:w-1/3 xl:w-1/3 p-4 h-3/6">
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
              <div className="p-4 text-center">
                <span className="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">
                  Curso Full sin Certificación
                </span>
                <h2 className="mt-2 mb-2  font-bold">
                  Acceso al contenido teórico y práctico
                </h2>
                <p className="text-sm">
                  Puedes acceder a todo el contenido teórico y práctico del
                  curso, la certificación la puedes pagar una vez completes el
                  curso (puede variar el precio de la certificación).
                </p>
                <div className="mt-3 items-center text-center">
                  <div className="items-center text-center">CLP $100.000</div>
                </div>
              </div>
              <div className="p-4 border-t border-b text-xs text-indigo-700">
                <span className="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">
                  {user ? "Ve a tu curso" : "inscríbete acá"}
                </span>
              </div>
            </a>
          </div>
          <div className="w-full sm:w-1/3 md:w-1/3 xl:w-1/3 p-4 h-3/6">
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
              <div className="p-4 text-center">
                <span className="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">
                  Curso Full con certificación
                </span>
                <h2 className="mt-2 mb-2  font-bold">
                  Acceso al contenido teórico, práctico y certificación.
                </h2>
                <p className="text-sm">
                  Puedes acceder a todo el contenido teórico del curso, todos
                  los ejercicios y la certificación oficial del Edugraphene.
                </p>
                <div className="mt-3 items-center text-center">
                  <div className="items-center text-center">CLP $180.000</div>
                </div>
              </div>
              <div className="p-4 border-t border-b text-xs text-indigo-700">
                <span className="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">
                  {user ? "Ve a tu curso" : "inscríbete acá"}
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Plans;
