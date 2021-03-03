import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import '../css/CartLink.css';

function CartLink({ cartItemsLength }) {
	return (
		<NavLink exact to="/cart" className="nav-link CartLink">
			<FontAwesomeIcon icon={faShoppingCart} size="3x" />
			<span className="cart-items-number text-dark">{cartItemsLength}</span>
		</NavLink>
	);
}

export default CartLink;
