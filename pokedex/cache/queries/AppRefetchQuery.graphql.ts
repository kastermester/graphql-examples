/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type AppRefetchQueryVariables = {
    selectedPokemonID: string;
    pokemonSelected: boolean;
};
export type AppRefetchQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"App_query">;
};
export type AppRefetchQuery = {
    readonly response: AppRefetchQueryResponse;
    readonly variables: AppRefetchQueryVariables;
};



/*
query AppRefetchQuery(
  $selectedPokemonID: String!
  $pokemonSelected: Boolean!
) {
  ...App_query_2W0AXX
}

fragment App_query_2W0AXX on Query {
  ...PokeList_query
  pokemon(id: $selectedPokemonID) @include(if: $pokemonSelected) {
    ...DetailView_pokemon
    id
  }
}

fragment DetailView_pokemon on Pokemon {
  name
  number
  types
  image
  weaknesses
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

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "pokemonSelected"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "selectedPokemonID"
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "image",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppRefetchQuery",
    "selections": [
      {
        "args": [
          {
            "kind": "Variable",
            "name": "pokemonSelected",
            "variableName": "pokemonSelected"
          },
          {
            "kind": "Variable",
            "name": "selectedPokemonID",
            "variableName": "selectedPokemonID"
          }
        ],
        "kind": "FragmentSpread",
        "name": "App_query"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "AppRefetchQuery",
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
          (v2/*: any*/),
          (v3/*: any*/)
        ],
        "storageKey": "pokemons(first:151)"
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
              (v3/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "weaknesses",
                "storageKey": null
              },
              (v2/*: any*/)
            ],
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "cacheID": "0da4464544b525164e701b7de408d13d",
    "id": null,
    "metadata": {},
    "name": "AppRefetchQuery",
    "operationKind": "query",
    "text": "query AppRefetchQuery(\n  $selectedPokemonID: String!\n  $pokemonSelected: Boolean!\n) {\n  ...App_query_2W0AXX\n}\n\nfragment App_query_2W0AXX on Query {\n  ...PokeList_query\n  pokemon(id: $selectedPokemonID) @include(if: $pokemonSelected) {\n    ...DetailView_pokemon\n    id\n  }\n}\n\nfragment DetailView_pokemon on Pokemon {\n  name\n  number\n  types\n  image\n  weaknesses\n}\n\nfragment PokeCell_pokemon on Pokemon {\n  id\n  image\n}\n\nfragment PokeList_query on Query {\n  pokemons(first: 151) {\n    id\n    ...PokeCell_pokemon\n  }\n}\n"
  }
};
})();
(node as any).hash = '1f4aa95d93ef84a19aa226d2155705f2';
export default node;
