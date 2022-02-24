import { useState } from "react";
import { AuthInput, LogosFooter, SecondNav } from "../components";
import { Link, useHistory } from "react-router-dom";
import { Notify } from "notiflix";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isForgottenPassword, setIsForgottenPassword] = useState(false);
  const { push } = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // We could remove this validation or we can keep it to double check
    if (!email || !password) {
      return Notify.failure("Todos los campos son requeridos");
    }
    setIsLoading(true);
    // your logic for login here
    return push("/");
  };

  return (
    <>
      <SecondNav isLogin />
      <section className="w-full bg-cover bg-add-back-img-2">
        <div className="max-w-screen-2xl mx-auto pb-24 px-14 md:px-0">
          <div className="w-full">
            <p className="pt-10 pb-16 text-2xl text-black text-center md:text-right px-9">
              <Link to="/" className="text-white underline px-0 lg:px-14">
                Volver a Inicio
              </Link>
            </p>
          </div>
          <section className="lg:w-4/5 2xl:w-1/2 max-w-3xl bg-white rounded-xl mx-2 sm:mx-5 md:mx-10 lg:mx-auto px-2 sm:px-14 py-20 border-opacity-50">
            <div className="mx-auto">
              <div className="container">
                <div className="w-full">
                  {isForgottenPassword ? (
                    <div className="flex flex-col">
                      <div className="flex flex-col lg:flex-row items-center mb-8 justify-between">
                        <div>
                          <div className="flex">
                            <h2 className="mb-3 text-4xl text-text font-bold">
                              Recuperar contraseña
                            </h2>
                          </div>
                        </div>
                        <div className="flex text-right">
                          <p className="flex text-2xl text-center lg:text-right">
                            <a
                              href="#_"
                              className="text-tertiary mb-3 inline underline text-right"
                              onClick={(e) => {
                                e.preventDefault();
                                setIsForgottenPassword(false);
                              }}
                            >
                              Volver a Iniciar Sesión
                            </a>
                          </p>
                        </div>
                      </div>
                      <div className="w-full mb-8 text-text font-semibold text-2xl">
                        Contacta al servicio técnico para recuperar tu
                        contraseña:{" "}
                        <a
                          className="hover:no-underline text-tertiary underline"
                          href="mailto:contacto@sencico.gob.pe"
                        >
                          contacto@azordev.com
                        </a>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col">
                      <div className="flex flex-col lg:flex-row items-center mb-8 justify-between">
                        <div className="flex">
                          <h2 className="mb-3 text-4xl sm:text-4xl font-bold text-text">
                            Iniciar sesión
                          </h2>
                        </div>
                        <div className="flex">
                          <p className="flex text-tertiary text-2xl text-center lg:text-right">
                            <button
                              type="button"
                              className="text-tertiary underline text-right"
                              onClick={() => setIsForgottenPassword(true)}
                            >
                              ¿Has olvidado tu contraseña?
                            </button>
                          </p>
                        </div>
                      </div>
                      <div className="w-full mb-8">
                        <AuthInput
                          type="email"
                          name="email"
                          className="block w-full px-4 py-3 mb-4 border border-tertiary border-opacity-100 bg-complementary rounded-lg focus:ring focus:ring-blue-500 focus:outline-none placeholder-text text-2xl"
                          placeholder="Correo Electrónico"
                          autocomplete="username"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                        <AuthInput
                          type="password"
                          name="password"
                          className="block w-full px-4 py-3 mb-4 border border-tertiary border-opacity-100 bg-complementary rounded-lg focus:ring focus:ring-blue-500 focus:outline-none placeholder-text text-2xl"
                          placeholder="Contraseña"
                          autocomplete="current-password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                      </div>
                      <div className="block">
                        <button
                          disabled={isLoading}
                          className="w-full px-3 py-4 font-bold text-white bg-primary rounded-lg text-3xl shadow-button"
                          type="submit"
                        >
                          Iniciar sesión
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
      <LogosFooter />
    </>
  );
};

export default Login;
