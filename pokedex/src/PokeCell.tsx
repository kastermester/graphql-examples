import * as React from 'react';
import { createFragmentContainer, graphql } from 'react-relay';
import './PokeCell.css';
import { PokeCell_pokemon } from '../cache/queries/PokeCell_pokemon.graphql';

interface Props {
	selectPokemon: (id: string) => void;
	pokemon: PokeCell_pokemon;
}

const PokeCell: React.FC<Props> = (props) => {
	const { selectPokemon, pokemon} = props;
	const handleClick = React.useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
		e.stopPropagation();
		e.preventDefault();

		selectPokemon(pokemon.id);

	}, [selectPokemon, pokemon]);
	const { image } = pokemon;
	const style = { backgroundImage: `url(${image})` };

	return <button onClick={handleClick} style={style} className="poke-cell"></button>;
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
