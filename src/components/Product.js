import { useParams } from 'react-router-dom';

function Product({ products }) {
	const { productId } = useParams();
	const intProductId = parseInt(productId, 10);
	const product = products.find((product) => product.id === intProductId);

	return (
		<div>
			<img src={product.image} alt={product.title} />
			<div>
				<p>{product.title}</p>
				<p>{product.price}</p>
			</div>
		</div>
	);
}

export default Product;
