import Footer from "./components/Footer";
import MainNav from "./components/MainNav";
import Home from "./pages/Home";

function App() {
	return (
		<>
			<MainNav page="home" />
			<Home />
			<Footer />
		</>
	);
}

export default App;
