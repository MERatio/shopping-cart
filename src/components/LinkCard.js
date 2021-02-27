import { Link, useRouteMatch } from 'react-router-dom';
import '../css/LinkCard.css';

function LinkCard({ item }) {
	const { url } = useRouteMatch();

	return (
		<div className="LinkCard">
			<Link to={`${url}/${item.id}`}>
				<span className="link-spanner"></span>
			</Link>
			<img src={item.image} alt={item.title} />
			<div>
				<p>{item.title}</p>
				<p>{item.price}</p>
			</div>
		</div>
	);
}

export default LinkCard;
