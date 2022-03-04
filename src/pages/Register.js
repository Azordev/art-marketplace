import React, { useState, useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import { Notify } from "notiflix";
import AuthInput from "../components/AuthInput";
import SecondNav from "../components/SecondNav";
import { register } from "../actions/authActions";
import { Footer } from "../components";


const Register = () => {
  const formRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(formRef.current);

    const res = await register(formData);
    setIsSubmitting(false);

    if (!res.status) {
      return Notify.failure(res.message);
    }

    Notify.success(res.message);
    history.push("/login");
  };

  return (
    <>
      <SecondNav />
      <section className="max-w-screen-2xl mx-auto w-full bg-white">
        <div className="w-full">
          <p className="pt-10 text-2xl text-black text-center md:text-right px-9">
            <Link to="/" className="text-tertiary underline px-0 lg:px-14">
              Volver a Inicio
            </Link>
          </p>
        </div>
        <div className="mx-auto px-5 sm:px-10 md:px-20 2xl:px-0 max-w-7xl">
          <div className="container">
            <div className="w-full m-auto bg-white ">
              <div className="flex flex-col items-start justify-start w-full h-full py-8">
                <p className="text-3xl font-bold text-tertiary">Detalles de la Cuenta</p>
                <form
                  onSubmit={handleSubmit}
                  encType="multipart/form"
                  ref={formRef}
                  className="w-full flex flex-col justify-between"
                >
                  <div className="relative mt-10 grid lg:grid-cols-2 gap-12">
                    <AuthInput
                      className="block w-full px-4 py-3 mb-4 border border-tertiary border-opacity-100 bg-complementary rounded-lg focus:ring focus:ring-blue-500 focus:outline-none placeholder-text text-2xl"
                      type="email"
                      name="email"
                      placeholder="Email"
                      autoComplete="username"
                      required
                    />
                    <AuthInput
                      className="block w-full px-4 py-3 mb-4 border border-tertiary border-opacity-100 bg-complementary rounded-lg focus:ring focus:ring-blue-500 focus:outline-none placeholder-text text-2xl"
                      type="password"
                      name="password"
                      placeholder="Contraseña"
                      autoComplete="new-password"
                      required
                      minLength="6"
                    />
                  </div>
                  <p className="text-3xl mt-8 font-bold text-tertiary">
                    Información Personal
                  </p>
                  <div className="relative mt-10 grid lg:grid-cols-2 gap-12">
                    <AuthInput
                      className="block w-full px-4 py-3 mb-4 border border-tertiary border-opacity-100 bg-complementary rounded-lg focus:ring focus:ring-blue-500 focus:outline-none placeholder-text text-2xl"
                      type="text"
                      name="name"
                      placeholder="Nombre"
                      autoComplete="given-name"
                      required
                    />
                    <AuthInput
                      className="block w-full px-4 py-3 mb-4 border border-tertiary border-opacity-100 bg-complementary rounded-lg focus:ring focus:ring-blue-500 focus:outline-none placeholder-text text-2xl"
                      type="text"
                      name="last_name"
                      placeholder="Apellido"
                      autoComplete="family-name"
                      required
                    />
                    <AuthInput
                      className="block w-full px-4 py-3 mb-4 border border-tertiary border-opacity-100 bg-complementary rounded-lg focus:ring focus:ring-blue-500 focus:outline-none placeholder-text text-2xl"
                      type="text"
                      name="phone"
                      placeholder="Teléfono"
                      autoComplete="tel"
                      required
                      
                    />
                    <AuthInput
                      className="block w-full px-4 py-3 mb-4 border border-tertiary border-opacity-100 bg-complementary rounded-lg focus:ring focus:ring-blue-500 focus:outline-none placeholder-text text-2xl"
                      type="text"
                      name="occupation"
                      placeholder="Ocupación"
                      autoComplete="organization-title"
                    />
                    <AuthInput
                      className="block w-full px-4 py-3 mb-4 border border-tertiary border-opacity-100 bg-complementary rounded-lg focus:ring focus:ring-blue-500 focus:outline-none placeholder-text text-2xl"
                      type="text"
                      name="company"
                      placeholder="Compañía"
                      autoComplete="organization"
                    />
                    <AuthInput
                      className="block w-full px-4 py-3 mb-4 border border-tertiary border-opacity-100 bg-complementary rounded-lg focus:ring focus:ring-blue-500 focus:outline-none placeholder-text text-2xl"
                      type="text"
                      name="country"
                      placeholder="País"
                      autoComplete="country-name"
                    />
                  </div>
                  <div className="relative mt-10 grid lg:grid-cols-3 gap-12">
                    <div className="relative col-span-2">
                      <p className="text-xl text-tertiary mt-8">
                        Creando una cuenta aceptas nuestros Términos de uso y
                        condiciones.
                      </p>
                    </div>
                    <div className="relative text-center lg:text-right">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="shadow-button inline-block w-full sm:w-96 max-w-xs px-5 py-4 font-bold text-center text-white bg-primary rounded-lg rounded-lg text-2xl disabled:opacity-50"
                      >
                        Registrarse
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer showButtons={false} />
    </>
  );
};

export default Register;
