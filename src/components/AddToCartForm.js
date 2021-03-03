import { useState } from 'react';
import QuantityGroup from './QuantityGroup';

function AddToCartForm({ productId, onSubmit }) {
	const [state, setState] = useState({ quantity: 1 });

	function handleInputChange(e) {
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
			<QuantityGroup value={state.quantity} onInputChange={handleInputChange} />
			<button className="btn btn-primary">Add To Cart</button>
		</form>
	);
}

export default AddToCartForm;
