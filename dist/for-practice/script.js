"use strict";
// ✅ Задача 1: Типизированный пользовательский профиль
// Цель: закрепить interface, type, union, enum.
// Создай типы для описания пользователя:
// У пользователя есть id (число), name (строка), role (может быть 'admin', 'user', 'guest'), и isActive (булево).
// Также у пользователя может быть contact — либо email (строка с @), либо телефон (строка из цифр и +), либо null.
// Напиши функцию printUserInfo(user), которая выводит в консоль:
// "Имя: ..., Роль: ..., Статус: активен/неактивен, Контакт: ..."
// Используй сужение типов, чтобы корректно обработать contact.
var Role;
(function (Role) {
    Role["Admin"] = "admin";
    Role["User"] = "user";
    Role["Guest"] = "guest";
})(Role || (Role = {}));
function printUserInfo(user) {
    const status = user.isActive === true ? "активен" : "не активен";
    let contact = user.contact === null ? "не указан" : user.contact;
    console.log(`Имя: ${user.name}, Роль: ${user.role}, Статус: ${status}, Контакт: ${contact}`);
}
const userOne = {
    id: 12,
    isActive: true,
    name: "Alex",
    role: Role.Admin,
    contact: null,
};
printUserInfo(userOne);
function getProductInfo(product) {
    let result = `Name: ${product.name}; Price: ${product.price}`;
    const fixedKeys = ["id", "name", "price"];
    let extraFields = [];
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
const product = {
    id: "124",
    name: "Phone",
    price: 300,
    newProp: "yes",
    model: "IPhone",
};
console.log(getProductInfo(product));
