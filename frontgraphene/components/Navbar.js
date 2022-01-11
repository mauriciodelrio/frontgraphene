// create a transparent navbar with logo taildwind
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useUser } from "@auth0/nextjs-auth0";

const NavBar = () => {
  const router = useRouter();
  const [display, setDisplay] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { user, error, isLoading } = useUser();
  console.log(user);
  useEffect(() => {
    // Perform localStorage action
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth < 768 ? true : false);
    }

    // console.log(item, typeof item);
    if (user !== null && user !== undefined && user !== "undefined") {
      window.localStorage.setItem("user", JSON.stringify(user));
    }
  }, []);
  const logout = () => {
    // console.log(localStorage, "dfsdfsdfs");
    router.push("/");
  };
  return (
    <nav className="w-full flex items-center justify-between text-right flex-wrap bg-white p-6">
      <Link href="/">
        <div className="flex items-center flex-shrink-0 text-gray-600 mr-6 cursor-pointer">
          <img src={"/carbon2.svg"} alt="logo" className="w-24 animate-spin-slow" /> 
        </div>
      </Link>
      <div className="block lg:hidden">
        <button
          className="flex items-center px-3 py-2 text-gray-600 border rounded hover:text-gray-800 hover:border-white"
          onClick={() => {
            setDisplay(!display);
          }}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
      {isMobile && display && (
        <div className="w-full block flex-grow lg:flex lg:items-left lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <Link href="/" passHref>
              <a className="block mt-4 md:text-lg md:bg-gray-transparent rounded px-3 py-1 text-left lg:inline-block lg:mt-0 text-gray-600 hover:text-gray-800 mr-4">
                Inicio
              </a>
            </Link>
            {!user && (
              <>
                <Link href="/api/auth/login">
                  <a className="block mt-4 md:text-lg md:bg-gray-transparent rounded px-3 py-1 text-left lg:inline-block lg:mt-0 text-gray-600 hover:text-gray-800 mr-4">
                    Entrar
                  </a>
                </Link>
              </>
            )}
            {user && (
              <>
                <Link href="/profile" passHref>
                  <a className="block mt-4 md:text-lg md:bg-transparent rounded px-3 py-1 text-left lg:inline-block lg:mt-0 text-orange-600 hover:text-gray-800 mr-4">
                    <img
                      src={user.picture}
                      alt="profile"
                      className="w-8 h-8 rounded-full inline-block"
                    />
                    <span className="text-gray-600">
                      {" " + user.given_name + "  "}
                    </span>
                  </a>
                </Link>

                <Link href="/api/auth/logout" passHref>
                  <a
                    onClick={logout}
                    className="block mt-4 md:text-lg md:bg-gray-transparentrounded px-3 py-1 text-left lg:inline-block lg:mt-0 text-gray-600 hover:text-orange-800 mr-4"
                  >
                    {" "}
                    Salir <FontAwesomeIcon icon={faSignOutAlt} size="1.5x" />
                  </a>
                </Link>
              </>
            )}
          </div>
        </div>
      )}

      {!isMobile && (
        <div className="w-full block flex-grow lg:flex lg:items-left lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <Link href="/" passHref>
              <a className="block mt-4 md:text-lg md:bg-gray-transparent rounded px-3 py-1 text-left lg:inline-block lg:mt-0 text-gray-600 hover:text-gray-800 mr-4">
                Inicio
              </a>
            </Link>
            {!user && (
              <>
                <Link href="/api/auth/login" passHref>
                  <a className="block mt-4 md:text-lg md:bg-gray-transparent rounded px-3 py-1 text-left lg:inline-block lg:mt-0 text-gray-600 hover:text-gray-800 mr-4">
                    Entrar
                  </a>
                </Link>
              </>
            )}
            {user && (
              <>
                <Link href="/profile" passHref>
                  <a className="block mt-4 md:text-lg md:bg-transparent rounded px-3 py-1 text-left lg:inline-block lg:mt-0 text-orange-600 hover:text-gray-800 mr-4">
                    <img
                      src={user.picture}
                      alt="profile"
                      className="w-8 h-8 rounded-full inline-block"
                    />
                    <span className="text-gray-600">
                      {' ' + user.given_name + "  "}
                    </span>
                  </a>
                </Link>

                <Link href="/api/auth/logout" passHref>
                  <a
                    onClick={logout}
                    className="block mt-4 md:text-lg md:bg-gray-transparent rounded px-3 py-1 text-left lg:inline-block lg:mt-0 text-gray-600 hover:text-orange-800 mr-4"
                  >
                    <FontAwesomeIcon icon={faSignOutAlt} />
                  </a>
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
