"use strict";
const statusNow = "ok";
function printId(id) {
    typeof id === "string" ? (id = id.toUpperCase()) : id;
}
printId(12);
function welcome(person) {
    if (Array.isArray(person)) {
        console.log(`Hello, ${person[0]} ${person[1]}`);
        return 1;
    }
    else {
        console.log(person);
        return "Done";
    }
}
welcome(["Alex", "Sijey"]);
welcome("Alex");
const arr2 = [];
// в таких случаях union оборачивают в скобки!
