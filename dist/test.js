"use strict";
// c: Функция createGreeting
// Напиши перегруженную функцию createGreeting, которая:
function createGreeting(name, language) {
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
function getProperty(obj, key) {
    return obj[key];
}
