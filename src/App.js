import { useState, useEffect } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';
import { isPositiveInteger } from './lib/helpers';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Cart from './components/Cart';
import SKGrid from './components/SKGrid';

function App() {
	const [products, setProducts] = useState([]);
	const [isProductsReady, setIsProductsReady] = useState(false);
	const [cartItems, setCartItems] = useState([]);

	async function fetchAndSetProducts() {
		const response = await fetch('https://fakestoreapi.com/products?limit=20');
		const products = await response.json();
		setProducts(products);
		setIsProductsReady(true);
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

	function handleQuantityInputChange(productId, value) {
		setCartItems((prevCartItems) => {
			return prevCartItems.map((prevCartItem) => {
				if (prevCartItem.productId !== productId) {
					return prevCartItem;
				} else {
					return {
						...prevCartItem,
						quantity: isPositiveInteger(value) ? parseInt(value, 10) : 1,
					};
				}
			});
		});
	}

	function handleCartItemDelete(productId) {
		setCartItems((prevCartItems) => {
			return prevCartItems.filter((prevCartItem) => {
				return prevCartItem.productId !== productId;
			});
		});
	}

	function mapCartItems(products, cartItems) {
		return cartItems.map((cartItem) => {
			return {
				product: products.find((product) => product.id === cartItem.productId),
				quantity: cartItem.quantity,
			};
		});
	}

	useEffect(() => {
		fetchAndSetProducts();
	}, []);

	return (
		<Router>
			<Navbar cartItemsLength={cartItems.length} />
			<main className="container">
				{isProductsReady ? (
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
							<Cart
								mappedCartItems={mapCartItems(products, cartItems)}
								onQuantityInputChange={handleQuantityInputChange}
								onCartItemDelete={handleCartItemDelete}
							/>
						</Route>
					</Switch>
				) : (
					<SKGrid />
				)}
			</main>
		</Router>
	);
}

export default App;
