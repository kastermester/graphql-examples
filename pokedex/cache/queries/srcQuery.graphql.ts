/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
import { App_query$ref } from "./App_query.graphql";
export type srcQueryVariables = {};
export type srcQueryResponse = {
    readonly " $fragmentRefs": App_query$ref;
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

fragment PokeList_query on Query {
  pokemons(first: 151) {
    id
    ...PokeCell_pokemon
  }
}

fragment PokeCell_pokemon on Pokemon {
  id
  image
}
*/

const node: ConcreteRequest = {
  "kind": "Request",
  "operationKind": "query",
  "name": "srcQuery",
  "id": null,
  "text": "query srcQuery {\n  ...App_query\n}\n\nfragment App_query on Query {\n  ...PokeList_query\n}\n\nfragment PokeList_query on Query {\n  pokemons(first: 151) {\n    id\n    ...PokeCell_pokemon\n  }\n}\n\nfragment PokeCell_pokemon on Pokemon {\n  id\n  image\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "srcQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "App_query",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "srcQuery",
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
            "kind": "ScalarField",
            "alias": null,
            "name": "image",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
};
(node as any).hash = '16aae97b85ca20bc0b3bd7d7552f3c39';
export default node;
