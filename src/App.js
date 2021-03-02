import { useState, useEffect } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Cart from './components/Cart';
import './App.css';

function App() {
	const [products, setProducts] = useState([]);
	const [cart, setCart] = useState([]);

	async function fetchAndSetProducts() {
		const response = await fetch('https://fakestoreapi.com/products?limit=20');
		const products = await response.json();
		setProducts(products);
	}

	function handleAddToCartSubmit(productId, quantity) {
		setCart((prevCart) => {
			const productInCart = prevCart.find((product) => {
				return product.productId === productId;
			});
			if (productInCart) {
				return prevCart.map((product) => {
					if (product.productId !== productId) {
						return product;
					} else {
						return {
							...product,
							quantity: product.quantity + quantity,
						};
					}
				});
			} else {
				return [...prevCart, { productId, quantity }];
			}
		});
	}

	useEffect(() => {
		fetchAndSetProducts();
	}, []);

	return (
		<Router>
			<Navbar cartLength={cart.length} />
			<main className="container">
				<Switch>
					<Route exact path="/">
						<Redirect to="products" />
					</Route>
					<Route path="/products">
						<Products
							products={products}
							onAddToCartSubmit={handleAddToCartSubmit}
						/>
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
