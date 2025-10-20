type UnionOne = 'a' | 'b' | 'c' | 'd';
type UnionTwo = 'a' | 'e' | 'c' | 'i';

type UnionThree = UnionOne | UnionTwo; // a, b, c, d, e, i
type Union4 = UnionOne & UnionTwo; // a, c

type Union5 = {
	a: string;
	b: string;
	c: number;
} & {
	a: string;
	t: boolean;
	z: null;
}

const example: Union5 = {
	a: 'a',
	b: 'b',
	c: 1,
	t: true,
	z: null,
}

// extends у типов не бывает
export type User = {
	readonly email: string;
	readonly login: string;
	password: string;
	phone: string;
}

type Person = {
	readonly firstName: string;
	readonly lastName: string;
	phone?: string;
	yearOfBirth: number;
}

type Employee = User & Person;

type Dev = {
	phone: string;
	level?: "junior" | "middle" | "senior";
	say(): void;
	code?: () => void;
} & Employee;
