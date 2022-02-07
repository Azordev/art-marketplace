import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getUserInformation } from "../actions/userActions";
import { PUBLIC_URL } from "../config/constants";
import Logo from "../assets/img/logo.png";
import Profile from "../assets/img/perfil.png";
import { Footer } from "../components";

const UserInformation = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const info = getUserInformation();
    setUser(info);
  }, []);

  return (
    <>
      <section className="max-w-screen-2xl mx-auto relative w-full sm:px-9 text-gray-700 bg-white body-font">
        <div className="container flex flex-col lg:flex-row justify-between py-5 px-0 mx-auto md:flex-row">
          <div className="flex items-center justify-center md:justify-start">
            <Link to="/">
              <img
                src={Logo}
                alt="logo"
                className="block object-contain mx-w-17-4 mx-h-4-6 lg:w-17-4"
              />
            </Link>
          </div>
          <div className="relative flex flex-col lg:flex-row inline-flex items-center md:items-end lg:items-center lg:space-x-3">
            <Link
              to="/"
              className="underline inline-flex items-center justify-center px-14 md:px-0 lg:px-14 py-3.5 text-xl font-semibold leading-6 text-black whitespace-no-wrap"
            >
              Volver al Inicio
            </Link>
          </div>
        </div>
      </section>
      {/* ********************* */}
      <div className="w-full bg-cover bg-add-back-img-2">
        <div className="mx-auto max-w-screen-2xl py-10">
          <section className="2xl:mx-auto rounded-xl max-w-5xl mx-12 xl:mx-auto bg-white px-5 py-5 sm:py-24 border-opacity-50 my-32">
            <div className="w-11/12 mx-auto">
              <div className="w-full">
                <div className="relative flex flex-col md:flex-row justify-between xl:space-x-60 w-full space-y-8 sm:space-y-0">
                  <div className="flex flex-col space-y-10">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
                      Información de Usuario
                    </h2>
                    <div className="flex flex-col">
                      <label className="text-2xl text-stone-700">
                        Nombre y apellidos:{" "}
                        <span className="text-2xl text-black">
                          {user.name} {user.last_name}
                        </span>
                      </label>
                      <label className="text-2xl text-stone-700">
                        Compañía:{" "}
                        <span className="text-2xl text-black">{user.company}</span>
                      </label>
                      <label className="text-2xl text-stone-700">
                        Ocupación:{" "}
                        <span className="text-2xl text-black">
                          {user.occupation}
                        </span>
                      </label>
                      <label className="text-2xl text-stone-700">
                        Teléfono:{" "}
                        <span className="text-2xl text-black">{user.phone}</span>
                      </label>
                      <label className="text-2xl text-stone-700">
                        País:{" "}
                        <span className="text-2xl text-black">{user.country}</span>
                      </label>
                    </div>
                    <div className="flex flex-col">
                      <label>
                        <Link
                          to="/user-information/edit"
                          className="underline text-black font-light text-xl text-opacity-80"
                        >
                          Editar información
                        </Link>
                      </label>
                      <label>
                        <a
                          href="/#"
                          className="underline hidden text-black font-light text-xl text-opacity-80"
                        >
                          Cambiar contraseña
                        </a>
                      </label>
                      <label>
                        <a
                          href="/#"
                          className="underline hidden text-black font-light text-xl text-opacity-80"
                        >
                          Eliminar cuenta
                        </a>
                      </label>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-4 lg:space-y-0">
                    <div className="flex flex-col space-y-4">
                      <div className="flex w-48 h-48 bg-black rounded-full mx-auto lg:mx-0">
                        <img
                          src={
                            user.image
                              ? `${PUBLIC_URL}${user.image}`
                              : Profile
                          }
                          className="mx-auto"
                          alt={`Foto de ${user.name}`}
                        />
                      </div>
                      <p className="font-semibold text-2xl text-center">
                        Imagen de perfil
                      </p>
                    </div>
                    <div className="gap-2 hidden flex-col mt-2">
                      <label>
                        <a
                          href="/#"
                          className="underline text-black font-light text-xl text-opacity-80"
                        >
                          Editar foto
                        </a>
                      </label>
                      <label>
                        <a
                          href="/#"
                          className="underline font-light text-xl text-opacity-80"
                        >
                          Eliminar foto
                        </a>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UserInformation;
