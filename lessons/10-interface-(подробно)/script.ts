interface User {
	readonly email: string; // позволяет присвоить лишь раз
	readonly login: string;
	password: string;
}

// много кода...

interface User {
	// расширяем интрефейс
	isOnline?: boolean;
}

interface Window {
	isAurth?: boolean;
}

// window.isAurth

interface Person {
	readonly firstName: string;
	readonly lastName: string;
	phone?: string;
	yearOfBirth: number;
}

interface Employee extends Person, User {
	// все свойства с интерфеса Person & User
}

interface Dev extends Employee {
	// все свойства Employee & Person & User
	phone: string; // можно менять свойства
	level?: "junior" | "middle" | "senior";
	// методы
	say(): void;
	code?: () => void;
}

// классы также могут наследовать интерфейсы
// class MyDeveloper implements Dev {
// }
