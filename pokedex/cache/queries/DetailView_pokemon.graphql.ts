/* tslint:disable */

import { ConcreteFragment } from "relay-runtime";
declare const _DetailView_pokemon$ref: unique symbol;
export type DetailView_pokemon$ref = typeof _DetailView_pokemon$ref;
export type DetailView_pokemon = {
    readonly name: string | null;
    readonly number: string | null;
    readonly types: ReadonlyArray<string | null> | null;
    readonly image: string | null;
    readonly weaknesses: ReadonlyArray<string | null> | null;
    readonly " $refType": DetailView_pokemon$ref;
};



const node: ConcreteFragment = {
  "kind": "Fragment",
  "name": "DetailView_pokemon",
  "type": "Pokemon",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "name",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "number",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "types",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "image",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "weaknesses",
      "args": null,
      "storageKey": null
    }
  ]
};
(node as any).hash = '74000da018a206bf9d3947e617afb64d';
export default node;
