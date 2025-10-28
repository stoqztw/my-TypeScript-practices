type WindowProp = keyof Window;

const myValue: WindowProp = "onslotchange";

interface Test {
	name: string;
	lastname: string;
	age: number
	say(): () => void;
}

type TestProp = keyof Test;

const testKeys: TestProp = "lastname"