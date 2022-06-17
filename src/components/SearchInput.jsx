import React, { useState } from 'react';
import { useSearchParams } from '../hooks/useSearchParams';
import inputclear from '../assets/img/inputclear.svg';
import inputsearch from '../assets/img/inputsearch.svg';

const SearchInput = ({ page, query }) => {
  const [searchValue, setSearchValue] = useState(query || '');
  const { updateQueryParams } = useSearchParams();

  const searchMargin = page === 'home'
    ? 'lg:mx-7'
    : 'lg:ml-7';

  const changeHandler = (e) => setSearchValue(e.target.value);

  const submitHandler = (e) => {
    e.preventDefault();
    updateQueryParams('q', searchValue.toLowerCase());
  };

  const clearHandler = () => {
    setSearchValue('');
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
        { searchValue && (
          <div onClick={ clearHandler } className="absolute right-14 inset-y-0 flex items-center hover:cursor-pointer">
            <img src={ inputclear } alt="Input clear" />
          </div>
        )}
        <div onClick={ submitHandler }className="absolute right-4 inset-y-0 flex items-center hover:cursor-pointer">
          <img src={ inputsearch } alt="Input search" />
        </div>
      </div>
    </nav>
  );
};

export default SearchInput;
