import React, { useState, useEffect, useLayoutEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import queryString from "query-string";

import { MainNav, Footer } from "../components";
import ProductItem from "../components/ProductItem";
import Slider from "../components/Slider";
import Filters from "../components/Products/Filters";

import { getProductsAsync } from "../actions/productosActions";
import {
	filterByCategory,
	filterBySearch,
	filterGeneric,
	filterManufacturer,
	filterBySubcategory,
} from "../utils/filters";
import Pagination from "../components/Products/Pagination";
import { getCategories } from "../actions/categoriasActions";

import ReactPaginate from 'react-paginate';

const Products = () => {
	const { search } = useLocation();
	const { push } = useHistory();
	const [products, setProducts] = useState([]);
	const [currentProducts, setCurrentProducts] = useState([]);
	const [categories, setCategories] = useState([]);
	const [selectedFilter, setSelectedFilter] = useState("none");
	const [selectedCategory, setSelectedCategory] = useState({
		name: "Todas",
		subcategories: [],
	});
	const [selectedSubcategory, setSelectedSubcategory] = useState({ name: "" });

	const filters = queryString.parse(search);

	const getProductsAndCategories = async () => {
		const data = await getProductsAsync();

		const res = await getCategories();

		if (res) setCategories(res);

		const categoryId = parseInt(filters.category);
		const subcategoryId = parseInt(filters.subcategory);

		if (res && categoryId && !subcategoryId) {
			categoryClicked(
				{ preventDefault: () => {} },
				res.find((category) => category.id == categoryId)
			);
			setSelectedFilter("category");
		} else if (subcategoryId) {
			subcategoryClicked({ preventDefault: () => {} }, subcategoryId, res);
			setSelectedFilter("category");
		}

		setProducts(data);
		setCurrentProducts(data);
	};

	const filterAll = async () => {
		if (filters.subcategory) {
			return setCurrentProducts(
				filterBySubcategory(products, filters.subcategory)
			);
		}
		if (filters.category) {
			return setCurrentProducts(filterByCategory(products, filters.category));
		}
		if (filters.q) {
			return setCurrentProducts(filterBySearch(products, filters.q));
		}
		if (selectedFilter === "generic") {
			return setCurrentProducts(filterGeneric(products));
		}
		if (selectedFilter === "manufacturer") {
			return setCurrentProducts(filterManufacturer(products));
		}

		return setCurrentProducts(await getProductsAsync());
	};

	useEffect(() => {
		filterAll();
	}, [categories, products, search, selectedFilter]);

	useEffect(() => {
		getProductsAndCategories();
	}, []);

	const categoryClicked = (e, category = {}) => {
		e.preventDefault();
		setSelectedCategory(category);
		setSelectedSubcategory({ name: "" });
		push(`/products?category=${category.id}`);
	};

	const subcategoryClicked = (e, subcategoryId, categoryList) => {
		e.preventDefault();
		const category = categoryList.find((category) =>
			category.subcategories.find(
				(subcategory) => subcategory.id == subcategoryId
			)
		);

		const query = {
			category: category ? category.id : "",
			subcategory: subcategoryId,
		};

		if (category) {
			setSelectedCategory(category);
			setSelectedSubcategory(
				category.subcategories.find(
					(subcategory) => subcategory.id == subcategoryId
				)
			);

			push(`/products?${queryString.stringify(query)}`);
		}
	};

	// const [currentPage, setCurrentPage] = useState(1);
	const [currentPosts, setCurrentPosts] = useState(null);
	const [postsPerPage] = useState(7);

	const [pageCount, setPageCount] = useState(0);
	const [itemOffset, setItemOffset] = useState(0);

	// const indexOfLastPost = currentPage * postsPerPage;
	// const indexOfFirstPost = indexOfLastPost - postsPerPage;

	// const pageNumbers = [...Array(Math.ceil(currentProducts.length / postsPerPage)+1).keys()].slice(1);
	// var endOffset;
	useEffect(() => {
		const endOffset = itemOffset + postsPerPage;
		setCurrentPosts(currentProducts.slice(itemOffset, endOffset))
		setPageCount(Math.ceil(currentProducts.length / postsPerPage))
	}, [itemOffset, postsPerPage])

	const handlePageClick = (event) => {
	  const newOffset = (event.selected * postsPerPage) % currentProducts.length;

	  setItemOffset(newOffset);
	};


	return (
		<>
			<MainNav query={queryString.parse(search).q} />

			<div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row px-5 lg:px-20 pt-5 lg:pt-16 pb-20">
				<Filters
					categoryClicked={categoryClicked}
					categories={categories}
					setFilter={setSelectedFilter}
					currentFilter={selectedFilter}
				/>
				<div className="w-full lg:w-4/5 space-y-8">
					{selectedFilter === "none" && (
						<p>
							<b>Pro Tip: </b>Usa un filtro a la izquierda para limitar la
							búsqueda
						</p>
					)}
					{selectedFilter === "generic" && (
						<div style={{backgroundColor: "#11698E"}} className="bg-add text-white md:mr-8 lg:mr-20 xl:mr-3 2xl:mr-10">
							<h2 className="text-4xl px-4 py-2 font-bold">Genéricos</h2>
						</div>
					)}
					{selectedFilter === "category" && (
						<>
							<div className="pl-8 lg:pl-2">
								<div className="container items-center">
									<div className="w-full">
										<p className="text-black text-xl sm:text-2xl font-normal">
											Inicio / Catálogo / {selectedCategory?.name} /{" "}
											{selectedSubcategory?.name}
										</p>
									</div>
								</div>
							</div>
							<div style={{backgroundColor: "#11698E"}} className="bg-add text-white md:mr-8 lg:mr-20 xl:mr-3 2xl:mr-10">
								<h2 className="text-4xl px-4 py-2 font-bold">
									{selectedCategory.name}{" "}
									{!!selectedSubcategory?.name &&
										`- ${selectedSubcategory.name}`}
								</h2>
							</div>
							{!!selectedCategory.subcategories.length && (
								<Slider
									categories={categories}
									data={selectedCategory.subcategories}
									itemClick={subcategoryClicked}
								/>
							)}
						</>
					)}
					{selectedFilter === "manufacturer" && (
						<div style={{backgroundColor: "#11698E"}} className="bg-add text-white md:mr-8 lg:mr-20 xl:mr-3 2xl:mr-10">
							<h2 className="text-4xl max-w-full block overflow-hidden text-ellipsis px-4 py-2 font-bold">
								Fabricantes
							</h2>
						</div>
					)}
					{
						currentProducts.length === 0
						? <h1 className="text-center">No hay productos usando estos argumentos</h1>
						:
						<>
							<div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4 w-full p-0 justify-evenly xl:justify-around">
								{
									currentPosts.map((product) => (
										<ProductItem data={product} key={`product-item-${product.id}`} />
									))
								}
							</div>

							{
								// currentPosts.length <= postsPerPage||
								/*<Pagination
									postsPerPage={postsPerPage}
									totalPosts={currentProducts.length}
									paginate={paginate}
									currentPage={currentPage}
									paginateFront={paginateFront}
									paginateBack={paginateBack}
								/>*/
								<ReactPaginate
								  onClick={()=>console.log('hey')}
								  //forcePage={1}
								  breakLabel="..."
								  previousLabel="Anterior"
								  nextLabel="Siguiente"
								  onPageChange={handlePageClick}
								  marginPagesDisplayed={1}
								  pageRangeDisplayed={1}
								  pageCount={pageCount}
								  renderOnZeroPageCount={null}
								  //forcePage={itemOffset}
								  breakClassName="bg-white px-2 md:px-4 py-2 cursor-pointer justify-self-end"
								  containerClassName=' py-3 flex justify-center text-center'
								  activeClassName='px-0 py-0 bg-white'
								  activeLinkClassName='bg-white px-4 py-2'
								  pageClassName='cursor-pointer bg-complementary mx-0.5 relative inline-flex items-center p-2 md:px-4 text-sm font-medium'
								  pageLinkClassName=''
								  disabledClassName=''
								  disabledLinkClassName=' text-gray'
								  nextClassName='truncate cursor-pointer ml-0.5 bg-complementary relative inline-flex items-center p-2 md:px-4 text-sm font-medium'
								  previousLinkClassName='truncate'
								  previousClassName='truncate cursor-pointer mr-0.5 bg-complementary relative inline-flex items-center p-2 md:px-4 text-sm font-medium'
								  nextLinkClassName='truncate'
								/>
							}
						</>
					}
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Products;
