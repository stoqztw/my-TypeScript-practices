function printPoint(point: { x: string; y: string }): void {
	console.log(point.x, point.y);
} // в аргументе мы указываем минимальныый набор того, что нам нужно для работы,
// поэтому не вощникает ошибка

const obj1 = {
	x: "1",
	y: "2",
};

const obj2 = {
	x: "2",
	y: "4",
	z: "1",
};

printPoint(obj2);

// работа с мнимым значением
function printName(user: { firstName: string; lastName?: string }): void {
	if (user.lastName) {
		console.log(
			`Nice to meet, Mr.${user.firstName} ${user.lastName.toUpperCase()}`
		);
	} else {
		console.log(`Nice to meet, Mr.${user.firstName}`);
	}
}

printName({ firstName: "Andrey" });
