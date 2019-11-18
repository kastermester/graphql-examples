import { ApolloServer } from 'apollo-server';
import { makeExecutableSchema, IResolverObject } from 'graphql-tools';
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
	addPersonWithPayload(name: String! age: Int): AddPersonPayload!
}

type AddPersonPayload {
	person: Person!
	query: Query!
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
				context,
			): Promise<Person | null> => getPersonById(args.id),
			allPeople: async (
				_,
				args: {},
				context,
			): Promise<(Person | null)[]> => {
				const peopleIds = await getAllPeopleIds();
				return getPeopleByIds(peopleIds);
			},
		} as IResolverObject<any, GraphQLContext>,
		Mutation: {
			addPerson: (
				_,
				args: { name: string; age?: number | null },
				context,
			): Promise<Person> => addPerson(args.name, args.age),
		} as IResolverObject<any, GraphQLContext>,
		Person: {
			friends: async (person, _, context): Promise<(Person | null)[]> => {
				const friendIds = await getFriendIdsById(person.id);
				return getPeopleByIds(friendIds);
			},
		} as IResolverObject<Person, GraphQLContext>,
	},
});

async function run(): Promise<void> {
	const server = new ApolloServer({
		schema,
		context: () => new GraphQLContext(),
	});

	server.listen({ port: 8080 }, () =>
		console.log(`🚀 Server ready at http://localhost:8080`),
	);
}

run().catch(e => {
	console.error(e);
	process.exit(1);
});
