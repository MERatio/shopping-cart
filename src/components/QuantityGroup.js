import '../css/QuantityGroup.css';

function QuantityGroup({ value, onInputChange }) {
	return (
		<div className="form-group d-flex align-items-center">
			<label htmlFor="quantity" className="mb-0">
				Quantity
			</label>
			<input
				type="number"
				className="form-control ml-3 quantity-input"
				id="quantity"
				name="quantity"
				value={value}
				min="1"
				step="1"
				required
				onChange={onInputChange}
			/>
		</div>
	);
}

export default QuantityGroup;
