import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function ShoppingCartLink() {
	return (
		<NavLink exact to="/cart" className="nav-link">
			<FontAwesomeIcon icon={faShoppingCart} size="3x" className="carrot" />
		</NavLink>
	);
}

export default ShoppingCartLink;
