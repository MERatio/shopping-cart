import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Product from './Product';
import LinkCards from './LinkCards';

function Products({ products, onAddToCartSubmit }) {
	const { path } = useRouteMatch();

	return (
		<Switch>
			<Route exact path={path}>
				<LinkCards items={products} />
			</Route>
			<Route exact path={`${path}/:productId`}>
				{products.length && (
					<Product products={products} onAddToCartSubmit={onAddToCartSubmit} />
				)}
			</Route>
		</Switch>
	);
}

export default Products;
