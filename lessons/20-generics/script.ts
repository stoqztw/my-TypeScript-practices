// Array<string> - generic
// string[]
// Promise<number> - generic

type TypeFactory<T> = T;
type XType = TypeFactory<string>; // string
type XTypeNum = TypeFactory<number>; // number

// function
function toArray<T>(...arg: T[]): T[] {
	return arg;
}

toArray(1, 2, 3);
toArray('a', 'b', 'c');

function head(value: string): string;
function head(value: readonly []): undefined;
function head<T>(value: readonly T[]): T;
function head(value: any): any {
	return value[0];
};

// interface
interface ModelData<T> {
	title: string;
	value: T;
}

const dataa: ModelData<number> = {
	title: 'A',
	value: 1
}

// function expression

type Fn = <T>() => T