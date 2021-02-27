import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Product from './Product';
import LinkCards from './LinkCards';

function Products({ products }) {
	const { path } = useRouteMatch();

	return (
		<div>
			<Switch>
				<Route exact path={path}>
					<LinkCards items={products} />
				</Route>
				<Route exact path={`${path}/:productId`}>
					{products.length && <Product products={products} />}
				</Route>
			</Switch>
		</div>
	);
}

export default Products;
