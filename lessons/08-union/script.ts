type Status = "ok" | "loading" | "error";

const statusNow: Status = "ok";

function printId(id: number | string): void {
	typeof id === "string" ? (id = id.toUpperCase()) : id;
}

printId(12);

function welcome(
	person: [name: string, firstname: string] | string
): number | string {
	if (Array.isArray(person)) {
		console.log(`Hello, ${person[0]} ${person[1]}`);
		return 1;
	} else {
		console.log(person);
		return "Done";
	}
}

welcome(["Alex", "Sijey"]);
welcome("Alex");

const arr2: (number | string)[] = [];
// в таких случаях union оборачивают в скобки!