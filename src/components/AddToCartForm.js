import { useState } from 'react';
import { isPositiveInteger } from '../lib/helpers';
import QuantityGroup from './QuantityGroup';

function AddToCartForm({ productId, onSubmit }) {
	const [state, setState] = useState({ quantity: 1 });

	function handleInputChange(e) {
		const target = e.target;
		const name = target.name;
		const value = target.value;
		const positiveIntegers = ['quantity'];
		setState({
			[name]: positiveIntegers.includes(name)
				? isPositiveInteger(value)
					? value
					: '1'
				: value,
		});
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
