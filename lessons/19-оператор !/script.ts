let word: string | null = null;
const num = 10;

if (num > 5) {
	word = "a";
}

console.log(word!.toLowerCase());

function printName(name?: string) {
	const fullName: string = name!;
}

interface Person {
	name: string;
	age: number;
	sex: 'female' | 'male';
}

function printPerson(person?: Person) {
	console.log(person!.name);
}