/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type PokeList_query = {
    readonly pokemons: ReadonlyArray<{
        readonly id: string;
        readonly " $fragmentRefs": FragmentRefs<"PokeCell_pokemon">;
    } | null> | null;
    readonly " $refType": "PokeList_query";
};
export type PokeList_query$data = PokeList_query;
export type PokeList_query$key = {
    readonly " $data"?: PokeList_query$data;
    readonly " $fragmentRefs": FragmentRefs<"PokeList_query">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "PokeList_query",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "first",
          "value": 151
        }
      ],
      "concreteType": "Pokemon",
      "kind": "LinkedField",
      "name": "pokemons",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "id",
          "storageKey": null
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "PokeCell_pokemon"
        }
      ],
      "storageKey": "pokemons(first:151)"
    }
  ],
  "type": "Query",
  "abstractKey": null
};
(node as any).hash = 'edad1e6c4ea6ebf9966ca80491882b9c';
export default node;
