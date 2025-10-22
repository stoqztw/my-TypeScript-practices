// ✅ Задача 1: Типизированный пользовательский профиль
// Цель: закрепить interface, type, union, enum.

// Создай типы для описания пользователя:

// У пользователя есть id (число), name (строка), role (может быть 'admin', 'user', 'guest'), и isActive (булево).
// Также у пользователя может быть contact — либо email (строка с @), либо телефон (строка из цифр и +), либо null.
// Напиши функцию printUserInfo(user), которая выводит в консоль:
// "Имя: ..., Роль: ..., Статус: активен/неактивен, Контакт: ..."
// Используй сужение типов, чтобы корректно обработать contact.

enum Role {
	Admin = "admin",
	User = "user",
	Guest = "guest",
}

type Email = string;
type Phone = string;
type Contact = Email | Phone | null;

type User = {
	id: number;
	name: string;
	role: Role;
	isActive: boolean;
	contact: Contact;
};

function printUserInfo(user: User): void {
	const status = user.isActive === true ? "активен" : "не активен";
	let contact = user.contact === null ? "не указан" : user.contact;

	console.log(
		`Имя: ${user.name}, Роль: ${user.role}, Статус: ${status}, Контакт: ${contact}`
	);
}

const userOne: User = {
	id: 12,
	isActive: true,
	name: "Alex",
	role: Role.Admin,
	contact: null,
};

printUserInfo(userOne);

// ✅ Задача 2: Гибридный объект с фиксированными и динамическими полями
// Цель: применить interface с индексными сигнатурами и понять ограничения.

// Создай интерфейс Product:

// Обязательные поля: id: string, name: string, price: number
// Дополнительно: любое количество дополнительных свойств, где ключ — строка, а значение — либо string, либо number
// Напиши функцию getProductInfo(product), которая:

// Возвращает строку с name и price
// А также перечисляет все дополнительные свойства (не id, name, price)

interface IProduct {
	id: string;
	name: string;
	price: number;
	[key: string]: string | number;
}

function getProductInfo(product: IProduct): string {
	let result = `Name: ${product.name}; Price: ${product.price}`;
	const fixedKeys = ["id", "name", "price"];
	let extraFields: string[] = [];

	for (let key in product) {
		if (!fixedKeys.includes(key)) {
			extraFields.push(`${key}: ${product[key]}`);
		}
	}

	if (extraFields.length > 0) {
		return `${result}; Дополнительно: ${extraFields.join("; ")}`;
	}

	return result;
}

const product: IProduct = {
	id: "124",
	name: "Phone",
	price: 300,
	newProp: "yes",
	model: "IPhone",
};

console.log(getProductInfo(product));

// ✅ Задача 2: Безопасная обработка API-ответа
// Цель: практика union, type guards, intersection.

// Представь, что ты получаешь ответ от API, который может быть:

// Успешным: { status: 'success'; data: { id: number; title: string } }
// Ошибочным: { status: 'error'; message: string }
// Создай типы для этих двух случаев.
// Напиши функцию handleApiResponse(response), которая:
// Если успех — возвращает data
// Если ошибка — выбрасывает ошибку с message
// Убедись, что TypeScript не ругается при доступе к data или message (используй сужение по status).

interface DataResponce {
	id: number;
	title: string;
}

interface SuccessResponce {
	status: "success";
	data: DataResponce;
}

interface ErrorResponce {
	status: "error";
	message: string;
}

function isSuccessResponce(
	responce: SuccessResponce | ErrorResponce
): responce is SuccessResponce {
	return responce.status === "success";
}

function handleApiResponce(responce: SuccessResponce | ErrorResponce) {
	if (isSuccessResponce(responce)) {
		return responce.data;
	}

	throw new Error(responce.message);
}

const responceFromApi: ErrorResponce = {
	status: "error",
	message: "ERROR 404",
};

console.log(handleApiResponce(responceFromApi));

export {};
