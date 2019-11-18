import * as React from 'react';
import PokeCell from './PokeCell';
import { graphql, createFragmentContainer } from 'react-relay';
import './PokeList.css';
import { PokeList_query } from '../cache/queries/PokeList_query.graphql';

interface Props {
	selectPokemon: (id: string) => void;
	isLoading: boolean;
	query: PokeList_query | null;
}

class PokeList extends React.Component<Props> {
	public render() {
		if (this.props.isLoading) {
			return <section className="poke-list"><div>Loading...</div></section>;
		}
		const query = this.props.query;
		const pokemons = query == null || query.pokemons == null ? [] : query.pokemons;
		const cells = (pokemons || []).map(pokemon => {
			if (pokemon == null) {
				return null;
			}
			return (
				<PokeCell
					key={pokemon.id}
					pokemon={pokemon}
					selectPokemon={this.props.selectPokemon}
				/>
			);
		});

		return (
			<section className="poke-list">
				{cells}
			</section>
		)
	}
}

export default createFragmentContainer(
	PokeList,
	graphql`
		fragment PokeList_query on Query {
			pokemons(first: 151) {
				id
				... PokeCell_pokemon
			}
		}
	`,
);
