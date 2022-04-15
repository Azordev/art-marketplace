import React, { useState } from 'react';
import { useSearchParams } from '../hooks/useSearchParams';

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
    updateQueryParams('q', '');
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
            <svg width="15" height="15" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.388258 0.388258C0.452121 0.324233 0.527987 0.273437 0.611512 0.238778C0.695036 0.204119 0.784578 0.186279 0.875008 0.186279C0.965438 0.186279 1.05498 0.204119 1.1385 0.238778C1.22203 0.273437 1.2979 0.324233 1.36176 0.388258L5.00001 4.02788L8.63826 0.388258C8.70218 0.324337 8.77806 0.273632 8.86158 0.239038C8.9451 0.204444 9.03461 0.186639 9.12501 0.186639C9.21541 0.186639 9.30492 0.204444 9.38843 0.239038C9.47195 0.273632 9.54784 0.324337 9.61176 0.388258C9.67568 0.452179 9.72638 0.528064 9.76098 0.61158C9.79557 0.695097 9.81338 0.78461 9.81338 0.875008C9.81338 0.965406 9.79557 1.05492 9.76098 1.13844C9.72638 1.22195 9.67568 1.29784 9.61176 1.36176L5.97213 5.00001L9.61176 8.63826C9.67568 8.70218 9.72638 8.77806 9.76098 8.86158C9.79557 8.9451 9.81338 9.03461 9.81338 9.12501C9.81338 9.21541 9.79557 9.30492 9.76098 9.38843C9.72638 9.47195 9.67568 9.54784 9.61176 9.61176C9.54784 9.67568 9.47195 9.72638 9.38843 9.76098C9.30492 9.79557 9.21541 9.81338 9.12501 9.81338C9.03461 9.81338 8.9451 9.79557 8.86158 9.76098C8.77806 9.72638 8.70218 9.67568 8.63826 9.61176L5.00001 5.97213L1.36176 9.61176C1.29784 9.67568 1.22195 9.72638 1.13844 9.76098C1.05492 9.79557 0.965406 9.81338 0.875008 9.81338C0.78461 9.81338 0.695097 9.79557 0.61158 9.76098C0.528064 9.72638 0.452179 9.67568 0.388258 9.61176C0.324337 9.54784 0.273632 9.47195 0.239038 9.38843C0.204444 9.30492 0.186639 9.21541 0.186639 9.12501C0.186639 9.03461 0.204444 8.9451 0.239038 8.86158C0.273632 8.77806 0.324337 8.70218 0.388258 8.63826L4.02788 5.00001L0.388258 1.36176C0.324233 1.2979 0.273437 1.22203 0.238778 1.1385C0.204119 1.05498 0.186279 0.965438 0.186279 0.875008C0.186279 0.784578 0.204119 0.695036 0.238778 0.611512C0.273437 0.527987 0.324233 0.452121 0.388258 0.388258Z" fill="#11698E"/>
            </svg>
          </div>
        )}
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
