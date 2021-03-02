import { useState } from 'react';
import '../css/AddToCartForm.css';

function AddToCartForm({ productId, onSubmit }) {
	const [state, setState] = useState({ quantity: 1 });

	function handleInputChange(e) {
		e.preventDefault();
		const target = e.target;
		const name = target.name;
		const value = target.value;
		setState({ [name]: value });
	}

	function handleSubmit(e) {
		e.preventDefault();
		onSubmit(productId, parseInt(state.quantity, 10));
	}

	return (
		<form onSubmit={handleSubmit}>
			<div className="form-group d-flex align-items-center">
				<label htmlFor="quantity" className="mb-0">
					Quantity
				</label>
				<input
					type="number"
					className="form-control ml-3 AddToCartForm-quantity"
					id="quantity"
					name="quantity"
					value={state.quantity}
					min="1"
					step="1"
					required
					onChange={handleInputChange}
				/>
			</div>
			<button className="btn btn-success">Add To Cart</button>
		</form>
	);
}

export default AddToCartForm;
