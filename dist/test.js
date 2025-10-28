"use strict";
// ✅ Задача 1: Универсальная функция identity
// Напиши функцию identity, которая:
// Принимает один аргумент любого типа
// Возвращает то же самое значение
// Сохраняет точный тип при вызове
// Пример:
// const a = identity(42);        // тип a — number
// const b = identity('hello');   // тип b — string
// const c = identity(true);      // тип c — boolean
function identity(arg) {
    return arg;
}
const a = identity(42);
const b = identity("hello");
const x = identity(true);
// ✅ Задача 2: Универсальный стек (класс с generics)
// Создай класс Stack<T>, который реализует простой стек со следующими методами:
// push(item: T): void — добавить элемент
// pop(): T | undefined — извлечь последний элемент
// isEmpty(): boolean — проверить, пуст ли стек
// Пример:
// const numberStack = new Stack<number>();
// numberStack.push(1);
// numberStack.push(2);
// const last = numberStack.pop(); // тип: number | undefined
class Stack {
    constructor() {
        this.items = [];
    }
    push(item) {
        this.items.push(item);
    }
    pop() {
        return this.items.pop();
    }
    isEmpty() {
        if (this.items.length === 0) {
            return true;
        }
        return false;
    }
}
const valOne = new Stack();
console.log(valOne.isEmpty());
valOne.push(1);
valOne.push(5);
console.log(valOne.isEmpty());
console.log(valOne.pop());
