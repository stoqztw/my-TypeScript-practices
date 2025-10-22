// c: Функция createGreeting
// Напиши перегруженную функцию createGreeting, которая:

// Если передать только имя (string) — возвращает "Hello, Имя!"
// Если передать имя и язык ('ru' | 'en') — возвращает приветствие на нужном языке:
// 'en' → "Hello, Имя!"
// 'ru' → "Привет, Имя!"

function createGreeting(name: string): string;
function createGreeting(name: string, language: "ru"): string;
function createGreeting(name: string, language: "en"): string;
function createGreeting(name: string, language?: "ru" | "en"): string {
	if (!language) {
		return `Hello, ${name}!`;
	}

	if (language === "ru") {
		return `Привет, ${name}!`;
	}

	return `Hello, ${name}!`;
}

console.log(createGreeting("Artem", "en"));

// ✅ Задача 2:

const user = {
	name: "Артём",
	age: 30,
	isActive: true,
};

function getProperty(obj: typeof user, key: "name"): string;
function getProperty(obj: typeof user, key: "age"): number;
function getProperty(obj: typeof user, key: "isActive"): boolean;
function getProperty(
	obj: typeof user,
	key: keyof typeof user
): string | number | boolean {
	return obj[key];
}
