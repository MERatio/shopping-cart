import LinkCard from './LinkCard';

function LinkCards({ items }) {
	const cards = items.map((item) => (
		<div key={item.id}>
			<LinkCard item={item} />
		</div>
	));

	return (
		<div>
			<div>{cards}</div>
		</div>
	);
}

export default LinkCards;
