import React, { useLayoutEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";


import FilterIcon from "../../assets/icons/filtro.png";

const Filters = ({ categoryClicked, categories, currentFilter, setFilter }) => {
	const { push } = useHistory();

	const handleClick = (e, filter) => {
		e.preventDefault();

		push("/products/");

		if (currentFilter === filter) {
			return setFilter("none");
		}
		return setFilter(filter);
	};

	return (
		<>
			<div className="flex w-full lg:w-1/5 items-start justify-center sm:justify-start my-10 lg:my-0">
				<div className="flex-col w-full mr-4 xl:max-w-filter sm:flex-row lg:flex-col relative inline-flex items-start sm:space-x-8 lg:space-x-0 space-y-4 sm:space-y-0 lg:space-y-4">
					<div className="flex items-center space-x-3 xl:mb-4">
						<img
							src={FilterIcon}
							alt="filter"
							className="block object-contain h-6 w-7 opacity-80"
						/>
						<p className="text-3xl">Filtro</p>
					</div>
					<Link
						to="#"
						className="text-center block w-full py-3.5 text-xl font-bold leading-6 text-black whitespace-no-wrap bg-add rounded-md shadow-sm"
						style={
							currentFilter === 'category'
							? { backgroundColor: '#11698E', color: '#FFF' }
							: { backgroundColor: '#F8F1F1', color: '#000' }}
						onClick={(e) => handleClick(e, "category")}
					>
						Categorías
					</Link>
					{
						currentFilter === 'category' &&
							<div className="border border-black rounded-md w-full pl-2">
								{categories.map(category => <div key={category.id} onClick={(e) => categoryClicked(e, category)} className="py-2 cursor-pointer text-black underline hover:no-underline">{category.name}</div>)}
							</div>
					}
					<Link
						to="#"
						className="text-center block w-full py-3.5 text-xl font-bold leading-6 text-black whitespace-no-wrap bg-add rounded-md shadow-sm"
						style={
							currentFilter === 'generic'
							? { backgroundColor: '#11698E', color: '#FFF' }
							: { backgroundColor: '#F8F1F1', color: '#000' }}
						onClick={(e) => handleClick(e, "generic")}
					>
						Genéricos
					</Link>
					<Link
						to="#"
						className="text-center block w-full py-3.5 text-xl font-bold leading-6 text-black whitespace-no-wrap bg-add rounded-md shadow-sm"
						style={
							currentFilter === 'manufacturer'
							? { backgroundColor: '#11698E', color: '#FFF' }
							: { backgroundColor: '#F8F1F1', color: '#000' }}
						onClick={(e) => handleClick(e, "manufacturer")}
					>
						Fabricante
					</Link>
				</div>
			</div>
		</>
	);
};

export default Filters;
