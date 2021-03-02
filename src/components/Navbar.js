import { NavLink } from 'react-router-dom';
import CartLink from './CartLink';

function Navbar() {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top mb-4">
			<NavLink to="/" className="navbar-brand">
				Shopping Cart
			</NavLink>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav ml-auto d-flex align-items-center">
					<li className="nav-item">
						<NavLink
							exact
							to="/products"
							className="nav-link h5"
							activeClassName="active"
						>
							Products
						</NavLink>
					</li>
					<li className="nav-item">
						<CartLink />
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;
