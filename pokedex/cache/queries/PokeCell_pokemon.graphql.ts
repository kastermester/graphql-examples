/* tslint:disable */

import { ConcreteFragment } from "relay-runtime";
declare const _PokeCell_pokemon$ref: unique symbol;
export type PokeCell_pokemon$ref = typeof _PokeCell_pokemon$ref;
export type PokeCell_pokemon = {
    readonly id: string;
    readonly image: string | null;
    readonly " $refType": PokeCell_pokemon$ref;
};



const node: ConcreteFragment = {
  "kind": "Fragment",
  "name": "PokeCell_pokemon",
  "type": "Pokemon",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "id",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "image",
      "args": null,
      "storageKey": null
    }
  ]
};
(node as any).hash = 'b5a320d70cf9b079bd44fec4b1739943';
export default node;
