import {
	getPeopleByIds,
	Person,
	getFriendIdsByIds,
	addPerson,
	getAllPeopleIds,
} from './db';
import DataLoader from 'dataloader';

async function loadManyThrowFirstError<K, V>(dataLoader: DataLoader<K, V>, keys: readonly K[]): Promise<V[]> {
	const result: V[] = [];
	for (const item of await dataLoader.loadMany(keys)) {
		if (item instanceof Error) {
			throw item;
		}
		result.push(item);
	}
	return result;
}

export class GraphQLContext {
	private readonly personLoader: DataLoader<
		number,
		Person | null
	> = new DataLoader(ids => getPeopleByIds(ids));

	private readonly friendLoader: DataLoader<
		number,
		number[]
	> = new DataLoader(ids => getFriendIdsByIds(ids));

	private readonly allPeopleLoader: DataLoader<
		1,
		(Person | null)[]
	> = new DataLoader(async ids => {
		const peopleIds = await getAllPeopleIds();
		const allPeople = await loadManyThrowFirstError(this.personLoader, peopleIds);

		return ids.map(_ => allPeople);
	});

	public loadPersonById(id: number): Promise<Person | null> {
		return this.personLoader.load(id);
	}

	public loadAllPeople(): Promise<(Person | null)[]> {
		return this.allPeopleLoader.load(1);
	}

	public async loadFriends(person: Person): Promise<(Person | null)[]> {
		const friends = await this.friendLoader.load(person.id);

		return loadManyThrowFirstError(this.personLoader, friends);
	}

	public addPerson(name: string, age?: number | null): Promise<Person> {
		return addPerson(name, age || null);
	}
}
