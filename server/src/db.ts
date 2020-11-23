export class Person {
	public readonly id: number;
	public readonly name: string;
	public readonly age: number | null;

	public constructor(id: number, name: string, age?: number | null) {
		this.id = id;
		this.name = name;
		this.age = age || null;
	}
}

const people: Map<number, Person> = new Map();

const friends: Map<number, number[]> = new Map();

function addPersonImpl(name: string, age?: number | null): Person {
	const person = new Person(people.size + 1, name, age);

	people.set(person.id, person);
	friends.set(person.id, []);

	return person;
}

addPersonImpl('John Doe');
addPersonImpl('Jane Smith');
addPersonImpl('John Smith');
addPersonImpl('Jane Doe');

makeRandomFriends();

function sleep(millis: number): Promise<void> {
	return new Promise(resolve => {
		setTimeout(resolve, millis);
	});
}

function makeRandomFriends() {
	people.forEach(person => {
		const friendsToSet: number[] = [];
		people.forEach(potentialFriend => {
			if (person === potentialFriend) {
				return;
			}
			const random = Math.random();

			if (random > 0.2) {
				friendsToSet.push(potentialFriend.id);
			}
		});
		friends.set(person.id, friendsToSet);
	});
}

export async function getPersonById(id: number): Promise<Person | null> {
	console.log('Loading person: ' + id);
	await sleep(100);

	const person = people.get(id);

	if (person == null) {
		return null;
	}
	return person;
}

export async function getFriendIdsById(personId: number): Promise<number[]> {
	console.log('Loading person friends: ' + personId);
	await sleep(100);
	const personFriends = friends.get(personId);
	if (personFriends == null) {
		throw new Error('No friends set for person: ' + personId);
	}
	return personFriends;
}

export async function getPeopleByIds(
	ids: readonly number[],
): Promise<(Person | null)[]> {
	console.log('Loading people: ' + JSON.stringify(ids));
	await sleep(150);

	return ids.map(id => {
		const person = people.get(id);
		if (person == null) {
			return null;
		}
		return person;
	});
}

export async function getAllPeopleIds(): Promise<number[]> {
	console.log('Loading all people ids');
	await sleep(50);
	return Array.from(people.keys());
}

export async function getFriendIdsByIds(ids: readonly number[]): Promise<number[][]> {
	console.log('Loading friends: ' + JSON.stringify(ids));
	await sleep(150);

	return ids.map(id => {
		const personFriends = friends.get(id);
		if (personFriends == null) {
			throw new Error('No friends set for person: ' + id);
		}
		return personFriends;
	});
}

export async function addPerson(
	name: string,
	age?: number | null,
): Promise<Person> {
	console.log('Adding person...');
	await sleep(500);

	return addPersonImpl(name, age);
}
