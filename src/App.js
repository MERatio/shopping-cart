import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Products from './components/Products';
import Cart from './components/Cart';
import './App.css';

function App() {
	const [products, setProducts] = useState([]);

	async function fetchAndSetProducts() {
		const response = await fetch('https://fakestoreapi.com/products?limit=20');
		const products = await response.json();
		setProducts(products);
	}

	useEffect(() => {
		fetchAndSetProducts();
	}, []);

	return (
		<Router>
			<Navbar />
			<main>
				<Switch>
					<Route exact path="/">
						<Homepage />
					</Route>
					<Route path="/products">
						<Products />
					</Route>
					<Route exact path="/cart">
						<Cart />
					</Route>
				</Switch>
			</main>
		</Router>
	);
}

export default App;
