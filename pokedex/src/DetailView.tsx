import * as React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import './DetailView.css';
import { DetailView_pokemon } from '../cache/queries/DetailView_pokemon.graphql';

interface Props {
	pokemon: DetailView_pokemon | null;
	isLoading: boolean;
}

function flattenOptionalStringList(list: ReadonlyArray<(string | null)> | null): string {
	return list == null ? '' : list.filter(i => i != null).join(', ');
}

const DetailView: React.FC<Props> = (props) => {
	const className = "detail-view" + (props.isLoading ? ' loading' : '');
	if (props.pokemon == null) {
		return <section className={className}></section>;
	}
	const { number, name, image, types, weaknesses } = props.pokemon;


	const typesToShow = flattenOptionalStringList(types);
	const weaknessesToShow = flattenOptionalStringList(weaknesses);

	const imageToShow = image == null ? <div className="sprite-image" /> : <img src={image} className='sprite-image' alt="sprite" />;

	return (
		<section className={className}>
			{imageToShow}
			<div className='data-wrapper'>
				<h1 className='data-name'>ID: {number} {name}</h1>
				<p className="data-char">Types: {typesToShow}<br />Weaknesses: {weaknessesToShow}</p>
			</div>
		</section>
	);
}

export default createFragmentContainer(
	DetailView,
	graphql`
		fragment DetailView_pokemon on Pokemon {
			name
			number
			types
			image
			weaknesses
		}
	`,
);
