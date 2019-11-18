import {
	getPeopleByIds,
	Person,
	getFriendIdsByIds,
	addPerson,
	getAllPeopleIds,
} from './db';
import DataLoader from 'dataloader';

export class GraphQLContext {
	private readonly personLoader: DataLoader<
		number,
		Person | null
	> = new DataLoader(async ids => {
		const persons = await getPeopleByIds(ids);

		return persons;
	});

	private readonly friendLoader: DataLoader<
		number,
		number[]
	> = new DataLoader(ids => {
		return getFriendIdsByIds(ids);
	});

	private readonly allPeopleLoader: DataLoader<
		1,
		(Person | null)[]
	> = new DataLoader(async ids => {
		const peopleIds = await getAllPeopleIds();

		const allPeople = await this.personLoader.loadMany(peopleIds);

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

		return this.personLoader.loadMany(friends);
	}

	public addPerson(name: string, age?: number | null): Promise<Person> {
		return addPerson(name, age || null);
	}
}
