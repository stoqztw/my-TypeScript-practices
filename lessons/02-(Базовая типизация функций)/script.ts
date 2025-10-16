function sum(a: number, b: number): number {
	return a + b;
}

const sum2 = (a: number, b: number): number => {
}

sum(2, 2);

function log(name: string, userId?: string): void {
	console.log(`Hello ${name}, his id ${userId || '12'}`);
}

log('Alex', '33');

function crash(): never {
	throw new Error('crash');
}

function avarage(...nums: number[]): number {
	const sum = nums.reduce((sum, cur) => sum + cur, 0);

	return sum / nums.length;
}

console.log(avarage(9, 2, 2, 10));