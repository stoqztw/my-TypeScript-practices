"use strict";
// ✅ Задача 1: Проверка, является ли значение строкой
// Напиши функцию isString, которая:
// Принимает значение типа unknown
// Возвращает true, если это строка, и false — иначе
// Является type guard, то есть после if (isString(x)) TypeScript должен знать, что x — string
function isString(str) {
    return typeof str === "string";
}
function hasEmail(obj) {
    return "email" in obj;
}
// ✅ Задача 3: Безопасная проверка на число
// Напиши функцию isNumber, которая:
// Принимает unknown
// Возвращает true, только если значение — настоящее число (не NaN, не Infinity)
// Является type guard для number
function isNumber(num) {
    return !Number.isNaN(num) && num !== Infinity && typeof num === "number";
}
function isPhoneOrder(order) {
    return order.type === "phone";
}
function isWebOrder(order) {
    return order.type === "web";
}
// ✅ Задача 5: Проверка, что значение — это массив строк
// Напиши функцию isStringArray, которая:
// Принимает unknown
// Возвращает true, если это массив, и все элементы — строки
// Является type guard для string[]
function isStringArray(arr) {
    return Array.isArray(arr) && arr.every((item) => typeof item === "string");
}
