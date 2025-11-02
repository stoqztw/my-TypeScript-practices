export {};

type T0 = Exclude<"a" | "b" | "c", "a">; // type = 'b' | 'c'

type Test = "a" | "b";
type TestTwo = "c" | "a";

type TestThree = Exclude<Test, TestTwo>;

type Status = "success" | "clientError" | "serverError" | 200 | 401 | 504;
type numericStatus = Exclude<Status, string>; // 200 | 401 | 504

// Extract
type Status1 = "success" | "clientError" | "serverError" | 200 | 401 | 504;
type numericStatus1 = Extract<Status1, string>; // 'success' | 'clientError' | 'serverError'

// NonNullable
type T01 = NonNullable<string | number | undefined>; // string | number

// Recorsd

type Names = Record<string, string>;

const objTest: Names = {
	"1": "1",
};

// Pick

interface ToDo {
	id: string;
	title: string;
	description: string;
	completed: boolean;
	createdAt: number;
}

type SimpleToDo = Pick<ToDo, "id" | "title" | "completed">;

// SimpleToDp = {
//		id: string;
// 		title: string;
//		completed: boolean;
// }

// Omit

interface ToDo {
	id: string;
	title: string;
	description: string;
	completed: boolean;
	createdAt: number;
}

type SimpleToDoTwo = Omit<ToDo, "id" | "title" | "completed">;

// SimpleToDp = {
//		description: string;
// 		createdAt: number;
// }

// For interface

interface ToDo {
	id: string;
	title: string;
	description: string;
	completed: boolean;
	createdAt: number;
}

type ReadOnlyToDo = Readonly<ToDo> // делает все значения в режими readonly

type PartilalToDO = Partial<ToDo> // делает все поля опциональными

type RequiredToDo = Required<ToDo> // делает все поля обязательными

