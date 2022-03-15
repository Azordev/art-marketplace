import { useState, useRef, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Notify } from 'notiflix';
import AuthInput from '../components/AuthInput';
import Logo from '../assets/img/logo.png';
import Footer from '../components/Footer';
import { updateUser } from '../actions/authActions';
import { getUserInformation } from '../actions/userActions';

const EditUser = () => {
  const [user, setUser] = useState({});
  const formRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const info = getUserInformation();
    setUser(info);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(formRef.current);

    const res = await updateUser(user.id, formData);
    setIsSubmitting(false);

    if (!res.status) {
      return Notify.failure(res.message);
    }

    Notify.success(res.message);
    history.push('/user-information');
  };

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
        </div>
      </section>
      <section className="max-w-screen-2xl mx-auto w-full bg-white">
        <div className="w-full">
          <p className="pt-10 text-2xl text-black text-center md:text-right px-9">
            <Link
              to="/user-information"
              className="text-black underline px-0 lg:px-14"
            >
              Volver a Información de Usuario
            </Link>
          </p>
        </div>
        <div className="mx-auto px-5 sm:px-10 md:px-20 2xl:px-0 max-w-7xl">
          <div className="container">
            <div className="w-full m-auto bg-white ">
              <div className="flex flex-col items-start justify-start w-full h-full py-8">
                <p className="text-3xl text-black">Detalles de la Cuenta</p>
                <form
                  onSubmit={handleSubmit}
                  encType="multipart/form"
                  ref={formRef}
                  className="w-full flex flex-col justify-between"
                >
                  <div className="relative mt-10 grid lg:grid-cols-2 gap-12">
                    <AuthInput
                      disabled
                      type="email"
                      name="email"
                      placeholder="Email"
                      autoComplete="username"
                      defaultValue={user.email}
                    />
                    <AuthInput
                      type="password"
                      name="password"
                      placeholder="Nueva Contraseña"
                      autoComplete="new-password"
                      minLength="6"
                    />
                  </div>
                  <p className="text-3xl text-black mt-8">
                    Información Personal
                  </p>
                  <div className="relative mt-10 grid lg:grid-cols-2 gap-12">
                    <AuthInput
                      type="text"
                      name="name"
                      placeholder="Nombre"
                      autoComplete="given-name"
                      defaultValue={user.name}
                      required
                    />
                    <AuthInput
                      type="text"
                      name="last_name"
                      placeholder="Apellido"
                      autoComplete="family-name"
                      defaultValue={user.last_name}
                      required
                    />
                    <AuthInput
                      type="text"
                      name="phone"
                      placeholder="Teléfono"
                      autoComplete="tel"
                      defaultValue={user.phone}
                    />
                    <AuthInput
                      type="text"
                      name="occupation"
                      placeholder="Ocupación"
                      autoComplete="organization-title"
                      defaultValue={user.occupation}
                    />
                    <AuthInput
                      type="text"
                      name="company"
                      placeholder="Compañía"
                      autoComplete="organization"
                      defaultValue={user.company}
                    />
                    <AuthInput
                      type="text"
                      name="country"
                      placeholder="País"
                      autoComplete="country-name"
                      defaultValue={user.country}
                    />
                  </div>
                  <div className="mx-auto mt-10">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="shadow-button inline-block w-full sm:w-96 max-w-xs px-5 py-4 font-bold text-center text-white add-color-icon rounded-lg text-2xl disabled:opacity-50"
                    >
                      Guardar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default EditUser;
