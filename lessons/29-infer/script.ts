function fromPair(test: number, pair: [string, string]) {
	const [key, value] = pair;

	return {
		[key]: value
	}
}

type FirstArg<T> = T extends (first: any, second: infer First, ...arg: any[]) => any ? First : never;

const myPair: FirstArg<typeof fromPair> = ["myKey", "MyValue"];

fromPair(1, myPair);

type ConstructorFirstArg<T> = T extends { new(arg: infer  A, ...args: any[]): any} ? A : never;

class Computer {
	constructor (brand: string) {

	}
}

let brand: ConstructorFirstArg<typeof Computer> = 'lenovo';

let dateArg: ConstructorFirstArg<typeof Date>

export{}