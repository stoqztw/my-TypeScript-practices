// ✅ Задача 1: Проверка, является ли значение строкой
// Напиши функцию isString, которая:

// Принимает значение типа unknown
// Возвращает true, если это строка, и false — иначе
// Является type guard, то есть после if (isString(x)) TypeScript должен знать, что x — string

function isString(str: unknown): str is string {
	return typeof str === "string";
}

// ✅ Задача 2: Проверка наличия обязательного поля
// У тебя есть два типа:
// interface User {
// interface Guest {

// Напиши type guard hasEmail(obj: User | Guest): obj is User,
// который проверяет, есть ли у объекта поле email.

interface User {
	name: string;
	email: string;
}

interface Guest {
	name: string;
}

function hasEmail(obj: User | Guest): obj is User {
	return "email" in obj;
}

// ✅ Задача 3: Безопасная проверка на число
// Напиши функцию isNumber, которая:

// Принимает unknown
// Возвращает true, только если значение — настоящее число (не NaN, не Infinity)
// Является type guard для number

function isNumber(num: unknown): num is number {
	return !Number.isNaN(num) && num !== Infinity && typeof num === "number";
}

// ✅ Задача 4: Различение форм заказа (упрощённая версия твоей задачи)
// Даны типы:
// ...
// Напиши два type guard'а:

// isPhoneOrder(order: Order): order is PhoneOrder
// isWebOrder(order: Order): order is WebOrder

interface PhoneOrder {
	type: "phone";
	phone: string;
}

interface WebOrder {
	type: "web";
	url: string;
}

type Order = PhoneOrder | WebOrder;

function isPhoneOrder(order: Order): order is PhoneOrder {
	return order.type === "phone";
}

function isWebOrder(order: Order): order is WebOrder {
	return order.type === "web";
}

// ✅ Задача 5: Проверка, что значение — это массив строк
// Напиши функцию isStringArray, которая:

// Принимает unknown
// Возвращает true, если это массив, и все элементы — строки
// Является type guard для string[]

function isStringArray(arr: unknown): arr is string[] {
	return Array.isArray(arr) && arr.every((item) => typeof item === "string");
}
