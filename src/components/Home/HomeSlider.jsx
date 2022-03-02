import React from "react";

const HomeSlider = () => {
  return (
    <>
      <div className="bg-add-back-img-1 pt-9 pb-4 mb-16 px-4 md:px-20 font-bold bg-cover">
        <div className="w-full flex justify-center md:justify-start items-end ">
          <p className="text-4xl text-white">Categorías</p>
        </div>
        <section className="w-full ">
          <div className="flex items-center justify-center mx-auto w-full space-x-8">
            <div className="relative flex flex-col items-start justify-center w-auto">
              <div className="relative flex">
                <div className="flex items-center justify-center w-10 h-10 text-black bg-white rounded-full cursor-pointer">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="box-content relative flex items-center w-4/5 h-auto max-w-full py-5 overflow-hidden xl:w-full rounded-xl from-transparent via-transparent to-gray-100">
              {/* Slide Page 1 */}
              <div className="flex w-full space-x-4 transition duration-500 ease-out transform h-94">
                {/* story 0 */}
                <div className="flex flex-col flex-shrink-0 w-auto overflow-hidden rounded-lg hover-scale shadow-button">
                  <div className="flex flex-col flex-1 justify-between py-4 px-10 bg-white">
                    <div className="flex-1">
                      <a href="/#" className="block text-center">
                        <span className="text-xl 2xl:text-3xl font-normal leading-tight leading-7 text-black">
                          Paredes
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                {/* story 1 */}
                <div className="flex flex-col flex-shrink-0 w-auto overflow-hidden rounded-lg hover-scale shadow-button">
                  <div className="flex flex-col flex-1 justify-between py-4 px-10 bg-white">
                    <div className="flex-1">
                      <a href="/#" className="block text-center">
                        <span className="text-xl 2xl:text-3xl font-normal leading-tight leading-7 text-black">
                          Materiales de construcción
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                {/* story 2 */}
                <div className="flex flex-col flex-shrink-0 w-auto overflow-hidden rounded-lg hover-scale shadow-button">
                  <div className="flex flex-col flex-1 justify-between py-4 px-10 bg-white">
                    <div className="flex-1">
                      <a href="/#" className="block text-center">
                        <span className="text-xl 2xl:text-3xl font-normal leading-tight leading-7 text-black">
                          Puertas
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                {/* story 3 */}
                <div className="flex flex-col flex-shrink-0 w-auto overflow-hidden rounded-lg hover-scale shadow-button">
                  <div className="flex flex-col flex-1 justify-between flex-1 py-4 px-14 bg-white">
                    <div className="flex-1">
                      <a href="/#" className="block text-center">
                        <span className="text-xl 2xl:text-3xl font-normal leading-tight leading-7 text-black">
                          Columnas
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                {/* story 4 */}
                <div className="flex flex-col flex-shrink-0 w-auto overflow-hidden rounded-lg hover-scale shadow-button">
                  <div className="flex flex-col flex-1 justify-between flex-1 py-4 px-14 bg-white">
                    <div className="flex-1">
                      <a href="/#" className="block text-center">
                        <span className="text-xl 2xl:text-3xl font-normal leading-tight leading-7 text-black">
                          Ventanas
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Slide Page 2 */}
              <div className="translate-x-full flex w-full space-x-8 transition duration-500 ease-out transform h-94 overflow-hidden">
                {/* story 1 */}
                <div className="flex flex-col flex-shrink-0 w-auto overflow-hidden rounded-lg hover-scale shadow-button">
                  <div className="flex flex-col flex-1 justify-between py-4 px-10 bg-white">
                    <div className="flex-1">
                      <a href="/#" className="block text-center">
                        <span className="text-xl 2xl:text-3xl font-normal leading-tight leading-7 text-black">
                          Mueble
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                {/* story 2 */}
                <div className="flex flex-col flex-shrink-0 w-auto overflow-hidden rounded-lg hover-scale shadow-button">
                  <div className="flex flex-col flex-1 justify-between py-4 px-10 bg-white">
                    <div className="flex-1">
                      <a href="/#" className="block text-center">
                        <span className="text-xl 2xl:text-3xl font-normal leading-tight leading-7 text-black">
                          Mueble
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                {/* story 3 */}
                <div className="flex flex-col flex-shrink-0 w-auto overflow-hidden rounded-lg hover-scale shadow-button">
                  <div className="flex flex-col flex-1 justify-between py-4 px-10 bg-white">
                    <div className="flex-1">
                      <a href="/#" className="block text-center">
                        <span className="text-xl 2xl:text-3xl font-normal leading-tight leading-7 text-black">
                          Mueble
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                {/* story 4 */}
                <div className="flex flex-col flex-shrink-0 w-auto overflow-hidden rounded-lg hover-scale shadow-button">
                  <div className="flex flex-col flex-1 justify-between py-4 px-10 bg-white">
                    <div className="flex-1">
                      <a href="/#" className="block text-center">
                        <span className="text-xl 2xl:text-3xl font-normal leading-tight leading-7 text-black">
                          Mueble
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* End slide page 2 */}
            </div>
            {/* End slide page 2 */}
            <div className="relative flex flex-col items-end justify-center w-auto">
              <div className="relative flex space-x-2">
                <div className="flex items-center justify-center w-10 h-10 text-black bg-white rounded-full cursor-pointer">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomeSlider;
