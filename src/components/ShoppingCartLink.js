import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import '../css/ShoppingCartLink.css';

function ShoppingCartLink() {
	return (
		<NavLink exact to="/cart" className="nav-link ShoppingCartLink">
			<FontAwesomeIcon icon={faShoppingCart} size="3x" className="carrot" />
			<span className="shopping-cart-items-number">0</span>
		</NavLink>
	);
}

export default ShoppingCartLink;
