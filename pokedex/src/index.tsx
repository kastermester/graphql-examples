import { QueryRenderer, graphql } from 'react-relay';
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { Environment, Network, Store, RecordSource } from 'relay-runtime';
import './index.css';
import { srcQuery } from '../cache/queries/srcQuery.graphql';
import App from './App';

function fetchQuery(
	operation: any,
	variables: any,
) {
	return fetch('https://graphql-pokemon2.vercel.app/', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			query: operation.text,
			variables,
		}),
	}).then(response => {
		return response.json();
	});
}

const modernEnvironment = new Environment({
	network: Network.create(fetchQuery),
	store: new Store(new RecordSource()),
});

const mountNode = document.getElementById('app');

const query = graphql`
	query srcQuery {
		... App_query
	}
`;

ReactDOM.render(
	<QueryRenderer<srcQuery>
		environment={modernEnvironment}
		query={query}
		variables={{}}
		render={(info) => {
			if (info.props == null) {
				return <App isLoading={true} query={null} />;
			}
			if (info.error != null) {
				return <div>Error!</div>
			}
			return <App isLoading={false} query={info.props} />;
		}}
	/>,
	mountNode
);
