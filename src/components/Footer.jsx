import React from "react";
import LogoFooter from "../assets/img/logo.png";
import notLoggedButtons from './isNotLogged';

const Footer = (props) => {

  return (
    <>
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
            <div className="grid w-full grid-cols-1 sm:grid-cols-2 mb-10 sm:mb-0 xl:mb-10 2xl:mb-0 justify-center">
              <div className="p-0 max-w-full w-60 mx-auto sm:w-full sm:mx-none">
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
              <div className="p-0 max-w-full w-60 mx-auto sm:w-full sm:mx-none">
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
                {props.showButtons ? notLoggedButtons() : ""}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
