/* tslint:disable */

import { ConcreteFragment } from "relay-runtime";
import { PokeCell_pokemon$ref } from "./PokeCell_pokemon.graphql";
declare const _PokeList_query$ref: unique symbol;
export type PokeList_query$ref = typeof _PokeList_query$ref;
export type PokeList_query = {
    readonly pokemons: ReadonlyArray<({
        readonly id: string;
        readonly " $fragmentRefs": PokeCell_pokemon$ref;
    }) | null> | null;
    readonly " $refType": PokeList_query$ref;
};



const node: ConcreteFragment = {
  "kind": "Fragment",
  "name": "PokeList_query",
  "type": "Query",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "pokemons",
      "storageKey": "pokemons(first:151)",
      "args": [
        {
          "kind": "Literal",
          "name": "first",
          "value": 151,
          "type": "Int!"
        }
      ],
      "concreteType": "Pokemon",
      "plural": true,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "id",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "FragmentSpread",
          "name": "PokeCell_pokemon",
          "args": null
        }
      ]
    }
  ]
};
(node as any).hash = 'edad1e6c4ea6ebf9966ca80491882b9c';
export default node;
