/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type PokeCell_pokemon = {
    readonly id: string;
    readonly image: string | null;
    readonly " $refType": "PokeCell_pokemon";
};
export type PokeCell_pokemon$data = PokeCell_pokemon;
export type PokeCell_pokemon$key = {
    readonly " $data"?: PokeCell_pokemon$data;
    readonly " $fragmentRefs": FragmentRefs<"PokeCell_pokemon">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "PokeCell_pokemon",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "image",
      "storageKey": null
    }
  ],
  "type": "Pokemon",
  "abstractKey": null
};
(node as any).hash = 'b5a320d70cf9b079bd44fec4b1739943';
export default node;
