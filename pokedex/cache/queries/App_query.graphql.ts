/* tslint:disable */

import { ConcreteFragment } from "relay-runtime";
import { DetailView_pokemon$ref } from "./DetailView_pokemon.graphql";
import { PokeList_query$ref } from "./PokeList_query.graphql";
declare const _App_query$ref: unique symbol;
export type App_query$ref = typeof _App_query$ref;
export type App_query = {
    readonly pokemon?: ({
        readonly " $fragmentRefs": DetailView_pokemon$ref;
    }) | null;
    readonly " $fragmentRefs": PokeList_query$ref;
    readonly " $refType": App_query$ref;
};



const node: ConcreteFragment = {
  "kind": "Fragment",
  "name": "App_query",
  "type": "Query",
  "metadata": null,
  "argumentDefinitions": [
    {
      "kind": "LocalArgument",
      "name": "selectedPokemonID",
      "type": "String",
      "defaultValue": ""
    },
    {
      "kind": "LocalArgument",
      "name": "pokemonSelected",
      "type": "Boolean",
      "defaultValue": false
    }
  ],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "PokeList_query",
      "args": null
    },
    {
      "kind": "Condition",
      "passingValue": true,
      "condition": "pokemonSelected",
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "pokemon",
          "storageKey": null,
          "args": [
            {
              "kind": "Variable",
              "name": "id",
              "variableName": "selectedPokemonID",
              "type": "String"
            }
          ],
          "concreteType": "Pokemon",
          "plural": false,
          "selections": [
            {
              "kind": "FragmentSpread",
              "name": "DetailView_pokemon",
              "args": null
            }
          ]
        }
      ]
    }
  ]
};
(node as any).hash = '14e4ae8fa7b4c254ceaab243e27cbb2f';
export default node;
