import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const SearchInput = ({ page, query }) => {
  const { push } = useHistory();
  const [searchValue, setSearchValue] = useState(query ? query : "");

  const searchMargin = page === "home" ? "lg:mx-7" : "lg:ml-7";

  const changeHandler = (e) => setSearchValue(e.target.value);

  const submitHandler = (e) => {
    e.preventDefault();
    push(`/products?q=${searchValue.toLowerCase()}`);
  };

  return (
    <nav className="flex items-center lg:w-full">
      <div className={`relative w-full my-7 ${searchMargin}`}>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            autoComplete="off"
            className="bg-secondComplementary text-gray-900 rounded-normal block pl-5 pr-10 py-3.5 w-full focus:outline-1 focus:outline-primary"
            value={searchValue}
            onChange={changeHandler}
          />
        </form>
        <div className="absolute right-4 inset-y-0 flex items-center pointer-events-none">
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.7794 17.2379C12.1353 20.1565 6.80108 19.9268 3.423 16.5487C-0.201548 12.9242 -0.201548 7.04762 3.423 3.42307C7.04756 -0.201488 12.9241 -0.201487 16.5487 3.42307C19.9267 6.80114 20.1565 12.1354 17.2378 15.7795L24.3268 22.8685C24.7296 23.2712 24.7296 23.9241 24.3268 24.3269C23.9241 24.7296 23.2711 24.7296 22.8684 24.3269L15.7794 17.2379ZM4.88141 15.0903C2.06232 12.2712 2.06232 7.70057 4.88141 4.88147C7.70051 2.06238 12.2712 2.06238 15.0903 4.88147C17.9073 7.6985 17.9094 12.2645 15.0965 15.0841C15.0944 15.0862 15.0923 15.0882 15.0902 15.0903C15.0882 15.0924 15.0861 15.0944 15.0841 15.0965C12.2645 17.9094 7.69844 17.9074 4.88141 15.0903Z"
              fill="#11698E"
            />
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default SearchInput;
