import { Link } from 'react-router-dom';

function Navbar() {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
			<Link to="/" className="navbar-brand">
				Shopping Cart
			</Link>
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
						<Link to="/products" className="nav-link">
							Products
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/cart" className="nav-link">
							Cart
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;
