import { Link } from 'react-router-dom';

function Navbar() {
	return (
		<nav>
			<Link to="/">Shopping Cart</Link>
			<div>
				<ul>
					<li>
						<Link to="/products">Products</Link>
					</li>
					<li>
						<Link to="/cart">Cart</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;
