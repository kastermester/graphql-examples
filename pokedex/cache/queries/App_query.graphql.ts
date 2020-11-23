/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type App_query = {
    readonly pokemon?: {
        readonly " $fragmentRefs": FragmentRefs<"DetailView_pokemon">;
    } | null;
    readonly " $fragmentRefs": FragmentRefs<"PokeList_query">;
    readonly " $refType": "App_query";
};
export type App_query$data = App_query;
export type App_query$key = {
    readonly " $data"?: App_query$data;
    readonly " $fragmentRefs": FragmentRefs<"App_query">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [
    {
      "defaultValue": false,
      "kind": "LocalArgument",
      "name": "pokemonSelected"
    },
    {
      "defaultValue": "",
      "kind": "LocalArgument",
      "name": "selectedPokemonID"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "App_query",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "PokeList_query"
    },
    {
      "condition": "pokemonSelected",
      "kind": "Condition",
      "passingValue": true,
      "selections": [
        {
          "alias": null,
          "args": [
            {
              "kind": "Variable",
              "name": "id",
              "variableName": "selectedPokemonID"
            }
          ],
          "concreteType": "Pokemon",
          "kind": "LinkedField",
          "name": "pokemon",
          "plural": false,
          "selections": [
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "DetailView_pokemon"
            }
          ],
          "storageKey": null
        }
      ]
    }
  ],
  "type": "Query",
  "abstractKey": null
};
(node as any).hash = '14e4ae8fa7b4c254ceaab243e27cbb2f';
export default node;
