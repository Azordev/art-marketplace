import { Notify } from "notiflix";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import SearchInput from "./SearchInput";
import Logo from "../assets/img/logo.png";
import perfil from "../assets/img/perfil.png";
import { getToken } from "../utils/authHelper";

const MainNav = ({ page, query }) => {
  const token = getToken();

  const AccessButtons = () => {
    return (
      <div className="relative sm:w-max sm:mx-auto lg:w-auto lg:mx-0 justify-center mb-4 gap-4 flex-col sm:flex-row lg:mb-0 lg:flex-row inline-flex items-center lg:justify-around lg:space-x-3">
        {page !== "home" && (
          <div className="text-center w-1/2">
            <Link
              to="/"
              className="inline-flex hover-scale items-center justify-center px-11 py-3.5 text-xl font-semibold leading-6 text-text whitespace-no-wrap"
            >
              Inicio
            </Link>
          </div>
        )}
        <div className="w-auto">
          <Link
            to="/login"
            className="inline-flex hover-scale items-center justify-center px-11 py-3.5 text-xl font-semibold leading-6 text-white whitespace-nowrap bg-primary rounded-normal shadow-button tracking-add"
          >
            Iniciar Sesión
          </Link>
        </div>
        <div className="w-auto">
          <Link
            to="/register"
            className="inline-flex hover-scale items-center justify-center px-14 py-3.5 text-xl font-semibold leading-6 text-white whitespace-no-wrap bg-tertiary rounded-normal shadow-button"
          >
            Regístrate
          </Link>
        </div>
      </div>
    );
  };

  const MyHistory = () => {
    const storage = localStorage.getItem("historial");
    const [userArtworkHistory, setHistorial] = useState(
      storage ?
      Array.from(JSON.parse(storage || "[]")) :
      []
    );

    useEffect(() => {
      setHistorial(JSON.parse(storage));
    }, [storage]);

    return (
      <div className="w-auto flex flex-row relative dropdown tracking-wide">
        <button className="inline-flex ml-2 items-center justify-center pl-5 py-3.5 text-xl font-semibold leading-6 text-black whitespace-no-wrap">
          Mi historial
        </button>
        <div className="flex items-center mt-1 mr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
        <div className="dropdown-menu z-10 top-full right-1/2 transform translate-x-1/2 absolute hidden h-auto pt-4 sm:right-auto sm:left-0 sm:translate-x-0 lg:right-0 lg:left-auto">
          <div className="block w-full bg-white shadow-dropdown px-4 py-4 rounded-md text-align-left">
            <div className="pb-6 w-60">
              <span className="block mb-2 font-bold text-black text-2xl">
                Mi Historial
              </span>
              {userArtworkHistory ? 
              (
                userArtworkHistory.map((artwork) => (
                  <Link 
                    to={`/artwork/${artwork.id}`} 
                    className="flex items-center justify-between py-1 hover:underline" key={`historial-item-${artwork.id}`}
                  >
                    <p className="text-xl truncate mr-1">{artwork.title}</p>
                    <img
                      alt="Arte"
                      src={artwork?.images?.web?.url}
                      className="object-cover w-20 h-20"
                    />
                  </Link>
                ))
              )
              :
              (
                <div className="pb-4 text-black">
                  Todavia no se ha descargado archivos
                </div>
              ) 
              }
            </div>
            <Link
              to={'/artworks'}
              className="block text-center py-2 text-xl font-semibold leading-6 text-white whitespace-nowrap bg-black rounded-md shadow-sm tracking-add"
            >
              Ver Catalogo
            </Link>
          </div>
        </div>
      </div>
    );
  };

  const MyAccount = () => {
    const history = useHistory();

    const onLogout = (e) => {
      e.preventDefault();

      sessionStorage.clear();
      Notify.success("Saliste de la sesión exitosamente");
      history.push("/");
    };

    return (
      <div className="w-auto flex flex-row relative dropdown tracking-wide">
        <div className="cursor-pointer inline-flex mr-2 items-center justify-center pl-5 py-3.5 text-xl font-semibold leading-6 text-black whitespace-no-wrap">
          Mi cuenta
          <div className="flex items-center mt-1 mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <img
            src={perfil}
            style={{ marginRight: ".5rem" }}
            className="w-14 h-14"
            alt="User Avatar"
          />
        </div>
        <div className="dropdown-menu z-10 top-full right-1/2 transform translate-x-1/2 absolute hidden h-auto sm:right-auto sm:left-0 sm:translate-x-0 lg:right-0 lg:left-auto">
          <div className="block w-full bg-white shadow-dropdown px-4 py-4 rounded-md text-align-left">
            <Link
              className="block py-4 px-2 mb-2 transition-colors duration-100 rounded-md text-xl text-black font-semibold hover:bg-black hover:text-white"
              to="user-information"
            >
              Mi información
            </Link>
            <button
              onClick={onLogout}
              className="block w-full hover-scale--min text-center mt-2 py-4 text-xl leading-6 bg-red-600 text-white font-semibold whitespace-nowrap rounded-md tracking-add"
            >
              Cerrar sesión
            </button>
          </div>
        </div>
      </div>
    );
  };

  const LoggedAccessButtons = () => {
    return (
      <div className="relative w-auto space-y-5 sm:space-y-0 flex flex-col sm:flex-row inline-flex items-center sm:justify-around sm:space-x-3 xl:space-x-2 whitespace-nowrap">
        {page !== "home" && (
          <div className="mx-auto text-center w-1/2">
            <Link
              to="/"
              className="inline-flex mx-auto items-center justify-center lg:ml-8 py-3.5 text-xl font-semibold leading-6 text-black whitespace-no-wrap"
            >
              Inicio
            </Link>
          </div>
        )}
        <MyHistory />
        <MyAccount />
      </div>
    );
  };

  return (
    <section className="sm:sticky top-0 z-50 w-full text-gray-700 bg-white body-font shadow-bottom shadow-box">
      <div className="flex max-w-screen-2xl px-8 mx-auto flex-col sm:flex-col lg:flex-row justify-between">
        <div className="flex flex-col lg:flex-row w-full">
          <div className="flex items-center mx-auto sm:mx-0 sm:justify-center lg:justify-start">
            <Link to="/">
              <img
                src={Logo}
                alt="logo"
                className="block max-w-full object-contain mx-h-4-6 lg:w-17-4"
              />
            </Link>
          </div>
          <SearchInput page={page} query={query} />
        </div>

        {token ? LoggedAccessButtons() : AccessButtons()}
      </div>
    </section>
  );
};

export default MainNav;
