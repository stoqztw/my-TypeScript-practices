"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const car = {
    wheels: 4,
    brand: 'BMW',
    type: 'Sedan',
};
car.new = 1;
console.log(car);
// car.brand = 1 - не верно
car.brand = '1'; // - верно
// можно использовать один и тот же интерфейс для нескольких объектов
const carTwo = {
    brand: 'Audi',
    type: 'Sedan',
    wheels: 6,
    isNew: true
};
//# sourceMappingURL=script.js.map