import { useParams } from 'react-router-dom';
import ProductForm from './ProductForm';
import AddToCartBtn from './AddToCartBtn';
import '../css/Product.css';

function Product({ products }) {
	const { productId } = useParams();
	const intProductId = parseInt(productId, 10);
	const product = products.find((product) => product.id === intProductId);

	return (
		<section className="row justify-content-center">
			<div className="col-sm-10">
				<div className="row">
					<div className="col-lg-4 text-center">
						<img
							src={product.image}
							alt={product.title}
							className="Product-img"
						/>
					</div>
					<div className="col-lg-8">
						<div>
							<h1>{product.title}</h1>
							<p className="carrot h2 font-weight-bold">{`$${product.price}`}</p>
						</div>
						<div className="mt-4">
							<ProductForm />
						</div>
						<div className="mt-4">
							<AddToCartBtn />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Product;
