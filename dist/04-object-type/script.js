"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function printPoint(point) {
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
function printName(user) {
    if (user.lastName) {
        console.log(`Nice to meet, Mr.${user.firstName} ${user.lastName.toUpperCase()}`);
    }
    else {
        console.log(`Nice to meet, Mr.${user.firstName}`);
    }
}
printName({ firstName: "Alex" });
//# sourceMappingURL=script.js.map