import { useParams } from 'react-router-dom';
import '../css/Product.css';

function Product({ products }) {
	const { productId } = useParams();
	const intProductId = parseInt(productId, 10);
	const product = products.find((product) => product.id === intProductId);

	return (
		<div className="row justify-content-center">
			<div className="col-10 container">
				<div className="row">
					<div className="col-4">
						<img
							src={product.image}
							alt={product.title}
							className="Product-img"
						/>
					</div>
					<div className="col-8">
						<div>
							<h1>{product.title}</h1>
							<p className="carrot h2 font-weight-bold">{`$${product.price}`}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Product;
