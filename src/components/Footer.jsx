import React from "react";
import { Link } from "react-router-dom";
import LogoFooter from "../assets/img/logo.png";
import twitterLogo from "../assets/icons/twitter.png";
import facebookLogo from "../assets/icons/facebook.png";
import youtubeLogo from "../assets/icons/youtube.png";
import mailLogo from "../assets/icons/mail.png";
import LogosFooter from "./LogosFooter";
import { isAuthenticated } from "../utils/isAuthenticated";

const notLoggedButtons = () => {
  if(!isAuthenticated()) {
    return (
      <div className="flex flex-col xl:flex-row 2xl:flex-col items-center justify-center xl:justify-between xl:px-10 2xl:px-0 2xl:justify-center">
        <Link
          to="/login"
          className="inline-flex items-end justify-center px-11 py-3.5 mb-7 xl:mb-0 2xl:mb-7 text-xl font-semibold leading-6 text-white whitespace-nowrap bg-black rounded-md shadow-button hover-scale tracking-add"
        >
          Iniciar Sesión
        </Link>
        <Link
          to="/register"
          className="inline-flex shadow-button items-end justify-center px-14 py-3.5 text-xl font-semibold leading-6 text-white whitespace-no-wrap add-color-icon hover-scale rounded-md"
        >
          Regístrate
        </Link>
      </div>
    )
  }
}

const Footer = () => {
  return (
    <>
      <LogosFooter />
      <section className="bg-add px-5 lg:px-10 2xl:px-20 py-10 xl:py-16">
        <div className="max-w-screen-2xl mx-auto flex flex-col xl:flex-row px-0 pb-16 w-full border-solid border-black border-opacity-50">
          <div className="w-full xl:w-1/2">
            <div className="flex items-start justify-center xl:justify-start">
              <img
                src={LogoFooter}
                alt="logo"
                className="block object-contain lg:w-80 lg:h36"
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row xl:flex-col 2xl:flex-row w-full sm:w-full xl:w-1/2">
            <div className="grid w-full grid-cols-2 xl:pl-10 mb-10 sm:mb-0 xl:mb-10 2xl:mb-0">
              <div className="p-0">
                <h5 className="text-lg font-bold text-black">Sobre nosotros</h5>
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
                <h5 className="text-lg font-bold text-black">
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
            </div>
            { notLoggedButtons() }
          </div>
        </div>
        <div className="border-solid border-add-2 border-black border-opacity-50" />
          <div className="max-w-screen-2xl mx-auto">
            <div className="flex flex-col items-center justify-between mx-auto mt-16 space-y-4 md:space-y-0 md:flex-row lg:mt-20">
              <div className="space-y-4 text-sm text-center md:space-y-0 md:text-left">
                <p className="text-black text-lg opacity-80">SENCICO ©2021</p>
                <a
                  href="/#"
                  className="my-4 text-xs leading-normal text-black text-lg opacity-80"
                >
                  Políticas de seguridad - Mapa del sitio - Términos y
                  Condiciones.
                </a>
              </div>
              <nav className="flex flex-col xl:flex-row items-center space-x-4">
                <div>
                  <p className="text-black text-lg opacity-80 w-full xl:w-auto mb-5 xl:mb-0">
                    Síguenos en nuestras redes sociales:
                  </p>
              </div>
              <div className="flex items-center space-x-4flex items-center space-x-4">
                <a
                  href="/#"
                  className="text-gray-500 hover:text-gray-600 w-auto"
                >
                  <span className="sr-only">Facebook</span>
                  <img
                    alt="Facebook"
                    src={facebookLogo}
                    className="inset-0 object-cover"
                  />
                </a>
                <a
                  href="/#"
                  className="text-gray-500 hover:text-gray-600 w-auto"
                >
                  <span className="sr-only">Twitter</span>
                  <img
                    src={twitterLogo}
                    className="inset-0 object-cover"
                    alt="Twitter"
                  />
                </a>
                <a
                  href="/#"
                  className="text-gray-500 hover:text-gray-600 w-auto"
                >
                  <span className="sr-only">Youtube</span>
                  <img
                    src={youtubeLogo}
                    className="inset-0 object-cover"
                    alt="Youtube"
                  />
                </a>
                <a
                  href="/#"
                  className="text-gray-500 hover:text-gray-600 w-auto"
                >
                  <span className="sr-only">Mail</span>
                  <img
                    src={mailLogo}
                    className="inset-0 object-cover"
                    alt="Mail"
                  />
                </a>
              </div>
            </nav>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
