import { Link, useRouteMatch } from 'react-router-dom';
import '../css/LinkCard.css';

function LinkCard({ item }) {
	const { url } = useRouteMatch();

	return (
		<div className="card LinkCard">
			<Link to={`${url}/${item.id}`}>
				<span className="link-spanner"></span>
			</Link>
			<img
				src={item.image}
				alt={item.title}
				className="card-img-top mx-auto LinkCard-img"
			/>
			<div className="card-body">
				<p className="card-title">{item.title}</p>
				<p className="card-text font-weight-bold text-primary">{`$${item.price}`}</p>
			</div>
		</div>
	);
}

export default LinkCard;
