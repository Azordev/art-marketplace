import React from "react";
import { Link } from "react-router-dom";
import Desing1 from "../assets/img/design-1.png";

const ArtworkItem = ({ data }) => (
  <Link
    to={`/artwork/${data.accession_number}`}
    className="relative flex flex-col justify-between p-0 mb-10 border border-solid rounded shadow-lg md:w-56 hover-scale--min sm:mx-16 md:mx-0 xl:mb-0 border-grayed"
  >
    <img
      className="object-contain w-full h-64 px-4 py-4"
      src={data?.images?.web ? `${data.images?.web?.url}` : Desing1}
      alt={data.title ? data.title : "Nombre de la obra"}
    />
    <div>
      <div className="block mx-6 my-4 overflow-hidden text-2xl font-extrabold leading-6 text-center vertical-ellipsis text-ellipsis xl:text-xl 2xl:text-2xl">
        {data.title ? data.title : "Nombre de la obra"}
      </div>
      <div className="w-full overflow-hidden">
        <p className="pb-5 mx-6 overflow-hidden text-xl leading-6 text-center text-black text-ellipsis xl:text-base 2xl:text-xl">
          {data.creation_date}
        </p>
      </div>
    </div>
    <div className="relative flex flex-col justify-center pb-5 mx-5 sm:flex-row sm:space-x-4 sm:mx-0 ">
      <span className="inline-flex items-center justify-center py-2 text-xl font-semibold leading-6 text-white bg-black rounded-md shadow-sm shadow-button px-11 sm:px-16 md:px-11 xl:px-8 2xl:px-11 xl:text-base 2xl:text-xl whitespace-nowrap tracking-add bg-primary">
        Ver
      </span>
    </div>
  </Link>
);

export default ArtworkItem;
