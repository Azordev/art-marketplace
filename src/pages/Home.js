import React, { useEffect, useState } from "react";
import {
	ObjectList,
	Hero
} from "../components/Home";
import {
	getLatestProducts,
	getGenericProducts,
	getManufacturerProducts,
} from "../actions/productosActions";
import { MainNav, Footer } from "../components";
import Slider from "../components/Slider";
import { getCategories } from "../actions/categoriasActions";
import { useHistory } from "react-router-dom";

const Home = () => {
	const { push } = useHistory();
	const [genericProducts, setGenericProducts] = useState([]);
	const [manufacturerProducts, setManufacturerProducts] = useState([]);
	const [newProducts, setNewProducts] = useState([]);
	const [categories, setCategories] = useState([]);

	const getProducts = async () => {
		await getLatestProducts(setNewProducts);
		await getGenericProducts(setGenericProducts);
		await getManufacturerProducts(setManufacturerProducts);
	};

	const getAllCategories = async () => {
		const res = await getCategories();
		if (res) setCategories(res);
	};

	useEffect(() => {
		getProducts();
		getAllCategories();
	}, []);

	const categoryClicked = (e, categoryId) => {
		e.preventDefault();
		const category = categories.find((category) => category.id === categoryId);
		push(`/artworks?category=${categoryId}`);
	};

	return (
		<>
			<MainNav page="home" />
				<Hero />
				<div className="bg-add-back-img-1 bg-cover">
					<Slider
						data={categories}
						itemClick={categoryClicked}
						className="max-w-screen-2xl mx-auto pt-0 pb-2 mb-16 px-4 md:px-20 font-bold bg-cover"
						title="Categorías"
					/>
				</div>
				<div className="max-w-screen-2xl mx-auto">
					<ObjectList
						title="Objetos genéricos"
						seeMore="/artworks"
						items={genericProducts}
					/>
					<ObjectList
						title="Objetos de fabricante"
						seeMore="/artworks"
						items={manufacturerProducts}
					/>
					<ObjectList
						title="Objetos nuevos"
						seeMore="/artworks"
						items={newProducts}
					/>
				</div>
			<Footer />
		</>
	);
};

export default Home;
