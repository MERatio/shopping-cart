import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import '../css/CartLink.css';

function CartLink() {
	return (
		<NavLink exact to="/cart" className="nav-link CartLink">
			<FontAwesomeIcon icon={faShoppingCart} size="3x" className="carrot" />
			<span className="cart-items-number">0</span>
		</NavLink>
	);
}

export default CartLink;