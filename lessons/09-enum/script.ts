enum ShapeKind {
	Circle = 12, // 0
	Square, // 1
}

const myShape = ShapeKind.Circle;

interface Circle {
	kind: ShapeKind.Circle;
	radius: number;
}

interface Square {
	kind: ShapeKind.Square;
	sideLength: number;
}

const circle1: Circle = {
	radius: 2,
	kind: ShapeKind.Circle,
};

// пример
enum StatusCodes {
	ERROR = 500,
	NOT_FOUND = 404,
	NOT_AUTH = 403,
}

interface DeveloperTwo {
	login: string;
	skills: string[];
	level: Grages;
}

enum Grages {
	Junior = "junior",
	Middle = "middle",
	Senior = "senior",
}

const dev3: DeveloperTwo = {
	level: Grages.Senior,
	login: "test",
	skills: ["ts"],
};

function upLevelDev(user: { level: Grages }): void {
	switch (user.level) {
		case Grages.Junior:
			user.level = Grages.Middle;
			break;
		case Grages.Middle:
			user.level = Grages.Senior;
			break;
		case Grages.Senior:
			console.log("His level is max!");
			break;
	}
}

upLevelDev(dev3);
console.log(dev3);
