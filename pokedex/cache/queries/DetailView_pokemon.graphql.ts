/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type DetailView_pokemon = {
    readonly name: string | null;
    readonly number: string | null;
    readonly types: ReadonlyArray<string | null> | null;
    readonly image: string | null;
    readonly weaknesses: ReadonlyArray<string | null> | null;
    readonly " $refType": "DetailView_pokemon";
};
export type DetailView_pokemon$data = DetailView_pokemon;
export type DetailView_pokemon$key = {
    readonly " $data"?: DetailView_pokemon$data;
    readonly " $fragmentRefs": FragmentRefs<"DetailView_pokemon">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "DetailView_pokemon",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "number",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "types",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "image",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "weaknesses",
      "storageKey": null
    }
  ],
  "type": "Pokemon",
  "abstractKey": null
};
(node as any).hash = '74000da018a206bf9d3947e617afb64d';
export default node;
