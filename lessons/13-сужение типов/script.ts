function example(x?: number | string) {
	if (typeof x === "string") {
		x.toUpperCase();
	} else if (typeof x === "number") {
		x.toFixed();
	} else if (x === undefined) {
		console.log("No value");
	} else {
		x;
	}
}

function example2(strs: string | string[] | null) {
	// if (typeof strs === 'object') {} - null тоже объект
	if (strs && typeof strs === "object") {
		// либо Array.isArray(strs);
		strs.push();
	} else if (typeof strs === "string") {
		strs.toUpperCase();
	} else {
		strs; // type: null
	}
}

function example3(x: number[] | Date) {
	if (x instanceof Date) {
		x.getTime();
	} else {
		x.push();
	}
}

type Fish = { swim: () => void };
type Bird = { fly: () => void };

function example4(animal: Fish | Bird) {
	if ("swim" in animal) {
		animal.swim();
	} else {
		animal.fly();
	}
}
