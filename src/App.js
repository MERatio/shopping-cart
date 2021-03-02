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
	const [cartItems, setCartItems] = useState([]);

	async function fetchAndSetProducts() {
		const response = await fetch('https://fakestoreapi.com/products?limit=20');
		const products = await response.json();
		setProducts(products);
	}

	function handleAddToCartSubmit(productId, quantity) {
		setCartItems((prevCartItems) => {
			const productInCart = prevCartItems.find((prevCartItem) => {
				return prevCartItem.productId === productId;
			});
			if (productInCart) {
				return prevCartItems.map((prevCartItem) => {
					if (prevCartItem.productId !== productId) {
						return prevCartItem;
					} else {
						return {
							...prevCartItem,
							quantity: prevCartItem.quantity + quantity,
						};
					}
				});
			} else {
				return [...prevCartItems, { productId, quantity }];
			}
		});
	}

	useEffect(() => {
		fetchAndSetProducts();
	}, []);

	return (
		<Router>
			<Navbar cartItemsLength={cartItems.length} />
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
