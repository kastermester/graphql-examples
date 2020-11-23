/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type srcQueryVariables = {};
export type srcQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"App_query">;
};
export type srcQuery = {
    readonly response: srcQueryResponse;
    readonly variables: srcQueryVariables;
};



/*
query srcQuery {
  ...App_query
}

fragment App_query on Query {
  ...PokeList_query
}

fragment PokeCell_pokemon on Pokemon {
  id
  image
}

fragment PokeList_query on Query {
  pokemons(first: 151) {
    id
    ...PokeCell_pokemon
  }
}
*/

const node: ConcreteRequest = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "srcQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "App_query"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "srcQuery",
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
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "image",
            "storageKey": null
          }
        ],
        "storageKey": "pokemons(first:151)"
      }
    ]
  },
  "params": {
    "cacheID": "c0fb927ba5714c54a81f7b6ac40e1f33",
    "id": null,
    "metadata": {},
    "name": "srcQuery",
    "operationKind": "query",
    "text": "query srcQuery {\n  ...App_query\n}\n\nfragment App_query on Query {\n  ...PokeList_query\n}\n\nfragment PokeCell_pokemon on Pokemon {\n  id\n  image\n}\n\nfragment PokeList_query on Query {\n  pokemons(first: 151) {\n    id\n    ...PokeCell_pokemon\n  }\n}\n"
  }
};
(node as any).hash = '16aae97b85ca20bc0b3bd7d7552f3c39';
export default node;
