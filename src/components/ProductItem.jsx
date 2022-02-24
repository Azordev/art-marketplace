import React from "react";
import { Link } from "react-router-dom";
import Desing1 from "../assets/img/design-1.png";
import { PUBLIC_URL } from "../config/constants";

const ProductItem = ({ data }) => (
  <Link
    to={`/product/${data.id}`}
    className="md:w-56 hover-scale--min relative p-0 sm:mx-16 md:mx-0 mb-10 xl:mb-0 shadow-lg border-grayed border border-solid rounded flex flex-col justify-between"
  >
    <img
      className="w-full h-64 py-4 px-4"
      src={
        data?.images.length ? `${PUBLIC_URL}${data.images[0].path}` : Desing1
      }
      alt="producto"
    />
    <div>
      <div className="font-extrabold vertical-ellipsis overflow-hidden text-center text-ellipsis block mx-6 text-2xl xl:text-xl 2xl:text-2xl my-4 leading-6">
        {data.name ? data.name : "Nombre del producto"}
      </div>
      <div className="overflow-hidden w-full">
        <p className="text-black text-center text-xl overflow-hidden text-ellipsis xl:text-base 2xl:text-xl mx-6 pb-5 leading-6">
          {data.brands?.name}
        </p>
      </div>
    </div>
    <div className="relative flex flex-col justify-center pb-5 sm:flex-row sm:space-x-4 mx-5 sm:mx-0 ">
      <span className="shadow-button inline-flex items-center justify-center px-11 sm:px-16 md:px-11 xl:px-8 2xl:px-11 py-2 text-xl xl:text-base 2xl:text-xl font-semibold leading-6 text-white whitespace-nowrap bg-black rounded-md shadow-sm tracking-add bg-primary">
        Descargar
      </span>
    </div>
  </Link>
);

export default ProductItem;
