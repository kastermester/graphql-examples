import { ApolloServer } from 'apollo-server';
import { makeExecutableSchema, IObjectTypeResolver } from 'graphql-tools';
import {
	Person,
	getPersonById,
	getAllPeopleIds,
	addPerson,
	getFriendIdsById,
	getPeopleByIds,
} from './db';
import { GraphQLContext } from './context';

const typeDefs = `
schema {
	query: Query
	mutation: Mutation
}

type Query {
	person(id: Int!): Person
	allPeople: [Person]!
}

type Mutation {
	addPerson(name: String! age: Int): Person!
}

type Person {
	id: Int!
	name: String!
	age: Int
	friends: [Person]!
}
`;

const schema = makeExecutableSchema<GraphQLContext>({
	typeDefs: typeDefs,
	resolvers: {
		Query: {
			person: (
				_,
				args: { id: number },
			): Promise<Person | null> => getPersonById(args.id),
			allPeople: async (
				_,
				args: {},
			): Promise<(Person | null)[]> => {
				const peopleIds = await getAllPeopleIds();
				return getPeopleByIds(peopleIds);
			},
		} as IObjectTypeResolver<any, GraphQLContext>,
		Mutation: {
			addPerson: (
				_,
				args: { name: string; age?: number | null },
			): Promise<Person> => addPerson(args.name, args.age),
		} as IObjectTypeResolver<any, GraphQLContext>,
		Person: {
			friends: async (person, _): Promise<(Person | null)[]> => {
				const friendIds = await getFriendIdsById(person.id);
				return getPeopleByIds(friendIds);
			},
		} as IObjectTypeResolver<Person, GraphQLContext>,
	},
});

async function run(): Promise<void> {
	const server = new ApolloServer({
		schema,
	});

	server.listen({ port: 8080 }, () =>
		console.log(`🚀 Server ready at http://localhost:8080`),
	);
}

run().catch(e => {
	console.error(e);
	process.exit(1);
});
