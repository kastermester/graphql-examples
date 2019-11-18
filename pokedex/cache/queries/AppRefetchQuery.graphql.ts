/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
import { App_query$ref } from "./App_query.graphql";
export type AppRefetchQueryVariables = {
    readonly selectedPokemonID: string;
    readonly pokemonSelected: boolean;
};
export type AppRefetchQueryResponse = {
    readonly " $fragmentRefs": App_query$ref;
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

fragment PokeList_query on Query {
  pokemons(first: 151) {
    id
    ...PokeCell_pokemon
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
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "selectedPokemonID",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "pokemonSelected",
    "type": "Boolean!",
    "defaultValue": null
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "image",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "AppRefetchQuery",
  "id": null,
  "text": "query AppRefetchQuery(\n  $selectedPokemonID: String!\n  $pokemonSelected: Boolean!\n) {\n  ...App_query_2W0AXX\n}\n\nfragment App_query_2W0AXX on Query {\n  ...PokeList_query\n  pokemon(id: $selectedPokemonID) @include(if: $pokemonSelected) {\n    ...DetailView_pokemon\n    id\n  }\n}\n\nfragment PokeList_query on Query {\n  pokemons(first: 151) {\n    id\n    ...PokeCell_pokemon\n  }\n}\n\nfragment DetailView_pokemon on Pokemon {\n  name\n  number\n  types\n  image\n  weaknesses\n}\n\nfragment PokeCell_pokemon on Pokemon {\n  id\n  image\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "AppRefetchQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "App_query",
        "args": [
          {
            "kind": "Variable",
            "name": "pokemonSelected",
            "variableName": "pokemonSelected",
            "type": null
          },
          {
            "kind": "Variable",
            "name": "selectedPokemonID",
            "variableName": "selectedPokemonID",
            "type": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "AppRefetchQuery",
    "argumentDefinitions": v0,
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
          v1,
          v2
        ]
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
              v2,
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "weaknesses",
                "args": null,
                "storageKey": null
              },
              v1
            ]
          }
        ]
      }
    ]
  }
};
})();
(node as any).hash = '1f4aa95d93ef84a19aa226d2155705f2';
export default node;
