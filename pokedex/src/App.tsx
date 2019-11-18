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

interface State {
  fetchingPokemon: boolean;
}

class App extends React.Component<Props, State> {
  public constructor(props: Props) {
    super(props);
    this.state = {
      fetchingPokemon: false
    };
  }

  selectPokemon = (id: string) => {
    if (this.state.fetchingPokemon) {
      return;
    }
    this.setState(
      {
        fetchingPokemon: true
      },
      () => {
        this.props.relay.refetch(
          {
            pokemonSelected: true,
            selectedPokemonID: id
          },
          undefined,
          () => {
            this.setState({
              fetchingPokemon: false
            });
          }
        );
      }
    );
  };

  render() {
    if (this.props.query == null || this.props.isLoading) {
      return (
        <div className="App">
          <PokeList
            query={null}
            selectPokemon={this.selectPokemon}
            isLoading={true}
          />
          <DetailView pokemon={null} isLoading={false} />
        </div>
      );
    }
    return (
      <div className="App">
        <PokeList
          query={this.props.query || null}
          isLoading={this.props.isLoading}
          selectPokemon={this.selectPokemon}
        />
        <DetailView
          pokemon={this.props.query.pokemon || null}
          isLoading={this.state.fetchingPokemon}
        />
      </div>
    );
  }
}

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
