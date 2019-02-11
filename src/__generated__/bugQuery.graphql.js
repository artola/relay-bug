/**
 * @flow
 * @relayHash d6681d9b057a1ff3659108c0199198d4
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type bugQueryVariables = {||};
export type bugQueryResponse = {|
  +q: {|
    +foo?: string
  |}
|};
export type bugQuery = {|
  variables: bugQueryVariables,
  response: bugQueryResponse,
|};
*/


/*
query bugQuery {
  q {
    __typename
    ... on F2 {
      foo
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "InlineFragment",
  "type": "F2",
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "foo",
      "args": null,
      "storageKey": null
    }
  ]
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "bugQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "q",
        "storageKey": null,
        "args": null,
        "concreteType": null,
        "plural": false,
        "selections": [
          (v0/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "bugQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "q",
        "storageKey": null,
        "args": null,
        "concreteType": null,
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "__typename",
            "args": null,
            "storageKey": null
          },
          (v0/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "bugQuery",
    "id": null,
    "text": "query bugQuery {\n  q {\n    __typename\n    ... on F2 {\n      foo\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'fa5c9a9950c2bde162de09fc2e2a2e27';
module.exports = node;
