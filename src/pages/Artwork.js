import React, { useState, useEffect, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MainNav, Footer } from '../components';
import { getArtworkById } from '../actions/artworks';

const Artwork = () => {
  const [artwork, setArtwork] = useState(null);
  const { id } = useParams();

  const historialStorage = useCallback(
    () => {
      const array = [...JSON.parse(localStorage.getItem('historial') || '[]')];
      const { title, images } = artwork;

      // To avoid showing this same artwork as is pointless to navigate to the same artwork I am seeing
      if (array.some(elem => elem.id === id)) return null;

      array.length > 4 && array.shift();
      array.push({ id, title, images });
      localStorage.setItem('historial', JSON.stringify(array));
    }, [artwork, id]);

  useEffect(() => {
    // Since we're only fetching the product and doing nothing else after that,
    // There's no need to await for the promise to resolve
    getArtworkById(id, setArtwork);
  }, [id]);

  useEffect(() => {
    artwork && historialStorage();
  }, [artwork, historialStorage]);

  return (
    <>
      <MainNav />
      <section className="max-w-screen-2xl mx-auto px-20 pt-16">
        <div className="container items-center">
          <div className="w-full 2xl:pl-11">
            <p className="text-text text-xl sm:text-2xl font-bold">
              <Link to="/"> Inicio / </Link>
              <Link to="/artworks"> Catálogo / </Link>
              <Link to={`/artworks?category=${artwork?.department}`}>
                {' '}
                {artwork?.department || 'Departamento'} /{' '}
              </Link>
              {artwork?.title || 'Titulo'}
            </p>
          </div>
        </div>
      </section>
      <section className="max-w-screen-2xl mx-auto px-11 pt-9">
        <div className="w-full container items-center">
          <div className="flex flex-col xl:flex-row justify-between w-full">
            <div className="xl:w-1/2 h-full mt-10 px-2 sm:px-4 xl:my-0 md:px-8 lg:px-20 xl:px-5 2xl:pl-11 order-last xl:order-first">
              <div className="flex px-5 flex-col w-full pb-6 space-y-8 2xl:pr-20">
                <h1 className="text-center xl:text-left text-3xl md:text-4xl font-bold tracking-add text-black leading-add">
                  <span className="block">{artwork?.title || 'Titulo'}</span>
                </h1>
                <div className="pl-1 py-2 pr-9">
                  <p className="mx-auto text-base text-black mb-2 lg:text-lg">
                    {artwork?.tombstone || 'Description'}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex xl:w-1/2 h-full items-center justify-center xl:justify-start px-2 sm:px-0 xl:pr-5 2xl:pr-0">
              <div className="flex w-full h-full overflow-hidden rounded-md sm:rounded-xl justify-center">
                {artwork && (
                  <img
                    alt="Arte"
                    style={{ maxHeight: '450px' }}
                    src={artwork?.images?.web?.url}
                    className="block object-contain h-96 md:h-full"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-screen-2xl mx-auto lg:px-11 xl:px-0 2xl:px-11 pb-20 lg:pb-40 2xl:pb-60 ">
        <div className="flex flex-col w-full px-2 sm:px-8 xl:px-5 2xl:px-11">
          <div className="relative flex flex-col w-full mt-16 lg:flex-row">
            <div className="relative lg:w-1/2 space-y-3 lg:space-y-5 2xl:pr-20">
              <div className="relative flex flex-col justify-center">
                <a
                  href={`${artwork?.url}`}
                  className="mb-6 py-3.5 hover-scale text-xl font-semibold leading-6 text-white whitespace-nowrap bg-primary rounded-md text-center tracking-add shadow-button"
                >
                  Ir a la obra
                </a>
              </div>

              <details className="relative overflow-hidden text-black bg-white rounded-lg">
                <summary className="px-6 py-2 border border-complementary bg-complementary rounded-lg cursor-pointer">
                  <h4 className="inline-flex items-center justify-between py-4 text-xl font-bold text-tertiary cursor-pointer lg:text-2xl">
                    <span>Información relacionada</span>
                  </h4>
                </summary>
                <p className="px-4 py-6 mt-1 text-black font-semibold lg:text-xl">
                  Departamento {artwork?.department || 'Otros'}
                </p>
              </details>

              <details className="relative overflow-hidden text-black bg-white rounded-lg">
                <summary className="px-6 py-2 border border-complementary bg-complementary rounded-lg cursor-pointer">
                  <h4 className="inline-flex items-center justify-between py-4 text-xl font-bold text-tertiary cursor-pointer lg:text-2xl">
                    <span>Clasificación</span>
                  </h4>
                </summary>
                <p className="px-4 py-6 mt-1 text-black font-semibold lg:text-xl">
                  {artwork?.measurements}
                </p>
              </details>
            </div>
            <div className="hidden lg:block relative flex flex-col w-/12 mt-16 lg:flex-row"></div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Artwork;
