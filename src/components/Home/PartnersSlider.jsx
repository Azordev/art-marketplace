import React from "react";
import AyniPeruLogo from "../../assets/img/any-peru-logo.png";
import IWorkLogo from "../../assets/img/Logotipo-I-WORK.png";

const PartnersSlider = () => (
  <section className="bg-white px-5 lg:px-10 2xl:px-20 py-10 xl:py-16">
    <div className="flex flex-col space-y-8">
      <div className="flex flex-col items-center justify-center">
        <p className="text-xl sm:text-2xl xl:text-4xl font-bold">
          Nuestros colaboradores
        </p>
      </div>
      <div className="">
        <p className="text-xl font-normal text-center">
          Gracias a los convenios y alianzas estratégicas con las principales
          organizaciones de la industria de la construcción.
        </p>
      </div>
    </div>
    <div className="carousel relative bg-white">
      <div className="carousel-inner relative overflow-hidden w-full">
        <input
          className="carousel-open"
          type="radio"
          id="carousel-1"
          name="carousel"
          aria-hidden={true}
          hidden={true}
          defaultChecked="defaultChecked"
        />
        <div className="flex flex-col sm:flex-row carousel-item absolute opacity-0 w-full justify-evenly lg:justify-center lg:space-x-0 mb-10">
          <img
            src={AyniPeruLogo}
            alt="Ayni Peru Logo"
            className="block w-auto object-contain"
          />
          <img src={IWorkLogo} alt="IWork Logo" className="block w-auto object-contain" />
        </div>

        <input
          className="carousel-open"
          type="radio"
          id="carousel-2"
          name="carousel"
          aria-hidden={true}
          hidden={true}
          defaultChecked="defaultChecked"
        />
        <div className="flex flex-col sm:flex-row carousel-item absolute opacity-0 w-full justify-evenly lg:justify-center lg:space-x-0 mb-10">
          <img
            src={AyniPeruLogo}
            alt="Ayni Peru Logo"
            className="block w-auto object-contain"
          />
          <img src={IWorkLogo} alt="IWork Logo" className="block w-auto object-contain" />
        </div>

        <input
          className="carousel-open"
          type="radio"
          id="carousel-3"
          name="carousel"
          aria-hidden={true}
          hidden={true}
          defaultChecked="defaultChecked"
        />
        <div className="flex flex-col sm:flex-row carousel-item absolute opacity-0 w-full justify-evenly lg:justify-center lg:space-x-0 mb-10">
          <img
            src={AyniPeruLogo}
            alt="Ayni Peru Logo"
            className="block w-auto object-contain"
          />
          <img src={IWorkLogo} alt="IWork Logo" className="block w-auto object-contain" />
        </div>

        <ol className="carousel-indicators pt-40">
          <li className="inline-block mr-3">
            <label
              htmlFor="carousel-1"
              className="carousel-bullet cursor-pointer block text-4xl text-black hover:text-red-600"
            >
              •
            </label>
          </li>
          <li className="inline-block mr-3">
            <label
              htmlFor="carousel-2"
              className="carousel-bullet cursor-pointer block text-4xl text-black hover:text-red-600"
            >
              •
            </label>
          </li>
          <li className="inline-block mr-3">
            <label
              htmlFor="carousel-1"
              className="carousel-bullet cursor-pointer block text-4xl text-black hover:text-red-600"
            >
              •
            </label>
          </li>
        </ol>
      </div>
    </div>
  </section>
);

export default PartnersSlider;
