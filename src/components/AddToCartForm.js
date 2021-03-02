import '../css/AddToCartForm.css';

function AddToCartForm() {
	return (
		<form>
			<div className="form-group d-flex align-items-center">
				<label htmlFor="quantity" className="mb-0">
					Quantity
				</label>
				<input
					type="number"
					className="form-control ml-3 AddToCartForm-quantity"
					id="quantity"
					value="1"
					min="1"
					step="1"
					required
				/>
			</div>
			<button className="btn btn-success">Add To Cart</button>
		</form>
	);
}

export default AddToCartForm;
