import * as React from "react";
import { graphql, createRefetchContainer, RelayRefetchProp } from "react-relay";
import PokeList from "./PokeList";
import DetailView from "./DetailView";
import "./App.css";
import { App_query } from "../cache/queries/App_query.graphql";

interface Props {
  query: App_query | null;
  isLoading: boolean;
  relay: RelayRefetchProp;
}

const App: React.FC<Props> = (props) => {
  const [fetchingPokemon, setFetchingPokemon] = React.useState(false);

  const selectPokemon = React.useCallback((id: string) => {
    if (fetchingPokemon) {
      return;
    }
    setFetchingPokemon(true);
    props.relay.refetch({
      pokemonSelected: true,
      selectedPokemonID: id,
    }, undefined, (err) => {
      setFetchingPokemon(false);
    });
  }, [fetchingPokemon]);

  if (props.query == null || props.isLoading) {
    return (
      <div className="App">
        <PokeList
          query={null}
          selectPokemon={selectPokemon}
          isLoading={true}
        />
        <DetailView pokemon={null} isLoading={false} />
      </div>
    );
  }
  return (
    <div className="App">
      <PokeList
        query={props.query || null}
        isLoading={props.isLoading}
        selectPokemon={selectPokemon}
      />
      <DetailView
        pokemon={props.query.pokemon || null}
        isLoading={fetchingPokemon}
      />
    </div>
  );
};

export default createRefetchContainer(
  App,
  graphql`
    fragment App_query on Query
      @argumentDefinitions(
        selectedPokemonID: { type: String, defaultValue: "" }
        pokemonSelected: { type: Boolean, defaultValue: false }
      ) {
      ...PokeList_query
      pokemon(id: $selectedPokemonID) @include(if: $pokemonSelected) {
        ...DetailView_pokemon
      }
    }
  `,
  graphql`
    query AppRefetchQuery(
      $selectedPokemonID: String!
      $pokemonSelected: Boolean!
    ) {
      ...App_query
        @arguments(
          selectedPokemonID: $selectedPokemonID
          pokemonSelected: $pokemonSelected
        )
    }
  `
);
