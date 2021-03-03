import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import QuantityGroup from './QuantityGroup';
import '../css/Cart.css';

function Cart({ mappedCartItems, onQuantityInputChange, onCartItemDelete }) {
	const subTotal = mappedCartItems.reduce(
		(sum, mappedCartItem) =>
			sum + mappedCartItem.product.price * mappedCartItem.quantity,
		0
	);

	return (
		<section className="row justify-content-center">
			<div className="col-sm-10">
				{mappedCartItems.length < 1 ? (
					<h1 className="text-center">You have no items in your cart</h1>
				) : (
					mappedCartItems.map((mappedCartItem) => (
						<div
							key={mappedCartItem.product.id}
							className="row align-items-center text-center mb-4"
						>
							<div className="col-md-3 mb-2">
								<Link to={`/products/${mappedCartItem.product.id}`}>
									<img
										src={mappedCartItem.product.image}
										alt={mappedCartItem.product.title}
										className="Cart-product-img"
									/>
								</Link>
							</div>
							<div className="col-md-4">
								<p className="mb-1">
									<Link to={`/products/${mappedCartItem.product.id}`}>
										{mappedCartItem.product.title}
									</Link>
								</p>
							</div>
							<div className="col-md-2 mb-2">
								<p className="text-primary font-weight-bold mb-1">{`$${mappedCartItem.product.price}`}</p>
								<button
									type="button"
									className="btn btn-danger"
									onClick={(e) => onCartItemDelete(mappedCartItem.product.id)}
								>
									<FontAwesomeIcon icon={faTrash} />
								</button>
							</div>
							<div className="col-md-3 d-flex justify-content-center">
								<QuantityGroup
									value={String(mappedCartItem.quantity)}
									onInputChange={(e) =>
										onQuantityInputChange(
											mappedCartItem.product.id,
											e.target.value
										)
									}
								/>
							</div>
						</div>
					))
				)}
				{mappedCartItems.length > 0 && (
					<div className="row d-flex justify-content-end">
						<p className="h4">
							Subtotal:{' '}
							<span className="font-weight-bold text-primary">
								${(Math.round(subTotal * 100) / 100).toFixed(2)}
							</span>
						</p>
					</div>
				)}
			</div>
		</section>
	);
}

export default Cart;
