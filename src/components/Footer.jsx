import React from "react";
import { Link } from "react-router-dom";
import LogoFooter from "../assets/img/logo.png";
import LogosFooter from "./LogosFooter";
import { isAuthenticated } from "../utils/isAuthenticated";

const notLoggedButtons = () => {
  if (!isAuthenticated()) {
    return (
      <div className="sm:col-span-2 sm:space-x-8 2xl:flex-col items-center justify-center xl:justify-between xl:px-10 2xl:px-0 2xl:justify-center sm:contents xl:contents 2xl:contents">
        <div className="flex flex-col sm:flex-inle sm:space-x-8 2xl:flex-col contents">
          <Link
            to="/login"
            className="flex space-x-4  sm:inline-flex items-end justify-center px-20 py-3.5 mb-5  md:inline-flex xl:inline-flex 2xl:mb-7  md:mb-7  text-xl font-semibold leading-6 text-white whitespace-nowrap bg-primary rounded-md shadow-button hover-scale tracking-add mt-5 xl:mt-5"
          >
            Iniciar Sesión
          </Link>
          <Link
            to="/register"
            className="flex space-x-4  sm:inline-flex shadow-button items-end justify-center px-20 py-3.5 mb-5  text-xl font-semibold leading-6  xl:mb-8 md:mb-7 text-white whitespace-no-wrap bg-tertiary hover-scale rounded-md md:inline-flex xl:inline-flex mt-5 md:mt-4 mt-5 xl:mt-5"
          >
            Regístrate
          </Link>

        </div>
      </div>
    );
  }
};

const Footer = () => {
  return (
    <>
      <LogosFooter />
      <section className="bg-complementary px-5 lg:px-10 2xl:px-20 py-10 xl:py-16">
        <div className="max-w-screen-2xl mx-auto flex flex-col xl:flex-row px-0 pb-16 w-full border-solid border-black border-opacity-50">
          <div className="w-full xl:w-1/2">
            <div className="flex items-start justify-center xl:justify-start">
              <img
                src={LogoFooter}
                alt="logo"
                className="block object-scale-down lg:w-80 lg:h36"
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row xl:flex-col 2xl:flex-row w-full sm:w-full xl:w-1/2">
            <div className="grid w-full grid-cols-2 xl:pl-10 mb-10 sm:mb-0 xl:mb-10 2xl:mb-0">
              <div className="p-0">
                <h5 className="text-lg font-bold text-primary">
                  Sobre nosotros
                </h5>
                <nav className="mt-4">
                  <ul className="leading-6">
                    <li>
                      <a href="/#" className="text-lg font-normal opacity-80">
                        Quiénes Somos
                      </a>
                    </li>
                    <li>
                      <a href="/#" className="text-lg font-normal opacity-80">
                        Historia
                      </a>
                    </li>
                    <li>
                      <a href="/#" className="text-lg font-normal opacity-80">
                        Misión
                      </a>
                    </li>
                    <li>
                      <a href="/#" className="text-lg font-normal opacity-80">
                        Base Legal
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="p-0">
                <h5 className="text-lg font-bold text-primary">
                  Página principal
                </h5>
                <nav className="mt-4">
                  <ul className="leading-6">
                    <li>
                      <a href="/#" className="text-lg font-normal opacity-80">
                        Nosotros
                      </a>
                    </li>
                    <li>
                      <a href="/#" className="text-lg font-normal opacity-80">
                        Formación y capacitación
                      </a>
                    </li>
                    <li>
                      <a href="/#" className="text-lg font-normal opacity-80">
                        Investigación y normalización
                      </a>
                    </li>
                    <li>
                      <a href="/#" className="text-lg font-normal opacity-80">
                        Contribución al SENCICO
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
                {notLoggedButtons()}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
