import LinkCard from './LinkCard';

function LinkCards({ items }) {
	const cards = items.map((item) => (
		<div key={item.id} className="col mb-4">
			<LinkCard item={item} />
		</div>
	));

	return (
		<section className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
			{cards}
		</section>
	);
}

export default LinkCards;
