import React from "react";
import LogoFooter from "../assets/img/logo.png";
import LogoMinisterio from "../assets/img/logo-2.png";
import LogoBicentenario from "../assets/img/logo-3.png";

const LogosFooter = () => (
  <section className="max-w-screen-2xl mx-auto bg-white px-5 lg:px-10 2xl:px-20 pb-10">
    <div className="flex flex-col items-center justify-center space-y-8 lg:space-y-0 lg:space-x-4 xl:space-x-0 lg:flex-row gap-12">
      <div>
        <img
          src={LogoMinisterio}
          alt=""
          className="block object-scale-down lg:w-80 lg:h36"
        />
      </div>
      <div>
        <img
          src={LogoFooter}
          alt=""
          className="block object-scale-down lg:w-80 lg:h36"
        />
      </div>
      <div>
        <img
          src={LogoBicentenario}
          alt=""
          className="block object-scale-down lg:w-80 lg:h36"
        />
      </div>
    </div>
  </section>
);

export default LogosFooter;
