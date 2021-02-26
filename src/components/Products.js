import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';
import Product from './Product';

function Products() {
	const { path, url } = useRouteMatch();
	const dummyProductId = `${Math.floor(Math.random() * 10) + 1}`;

	return (
		<div>
			<Switch>
				<Route exact path={path}>
					<h1>Products</h1>
					<Link to={`${url}/${dummyProductId}`}>Product {dummyProductId}</Link>
				</Route>
				<Route exact path={`${path}/:productId`}>
					<Product />
				</Route>
			</Switch>
		</div>
	);
}

export default Products;
