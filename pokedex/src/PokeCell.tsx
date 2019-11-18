import * as React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import './PokeCell.css';
import { PokeCell_pokemon } from '../cache/queries/PokeCell_pokemon.graphql';

interface Props {
	selectPokemon: (id: string) => void;
	pokemon: PokeCell_pokemon;
}

class PokeCell extends React.Component<Props> {
	private handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.stopPropagation();
		e.preventDefault();

		this.props.selectPokemon(this.props.pokemon.id);
	}

	public render() {
		const { image } = this.props.pokemon;
		const style = { backgroundImage: `url(${image})` };

		return <button onClick={this.handleClick} style={style} className="poke-cell"></button>
	}
};

export default createFragmentContainer(
	PokeCell,
	graphql`
		fragment PokeCell_pokemon on Pokemon {
			id
			image
		}
	`,
);
