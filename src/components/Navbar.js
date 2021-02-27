import { NavLink } from 'react-router-dom';

function Navbar() {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
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
				<ul className="navbar-nav ml-auto">
					<li className="nav-item">
						<NavLink
							exact
							to="/products"
							className="nav-link"
							activeClassName="active"
						>
							Products
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink
							exact
							to="/cart"
							className="nav-link"
							activeClassName="active"
						>
							Cart
						</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;
