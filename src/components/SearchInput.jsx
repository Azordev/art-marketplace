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
				<div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
					<svg
						className="w-5 h-5 text-gray-500"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fillRule="evenodd"
							d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
							clipRule="evenodd"
						></path>
					</svg>
				</div>
				<form onSubmit={submitHandler}>
					<input
						type="text"
						autoComplete="off"
						className="bg-add text-gray-900 rounded-full block pl-10 pr-10 py-3.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white w-full"
						value={searchValue}
						onChange={changeHandler}
					/>
				</form>
				<div className="absolute right-2 inset-y-0 flex items-center pointer-events-none">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-5 w-5"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fillRule="evenodd"
							d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
							clipRule="evenodd"
						/>
					</svg>
				</div>
			</div>
		</nav>
	);
};

export default SearchInput;
