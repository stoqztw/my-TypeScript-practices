"use strict";
function example(x) {
    if (typeof x === "string") {
        x.toUpperCase();
    }
    else if (typeof x === "number") {
        x.toFixed();
    }
    else if (x === undefined) {
        console.log("No value");
    }
    else {
        x;
    }
}
function example2(strs) {
    // if (typeof strs === 'object') {} - null тоже объект
    if (strs && typeof strs === "object") {
        // либо Array.isArray(strs);
        strs.push();
    }
    else if (typeof strs === "string") {
        strs.toUpperCase();
    }
    else {
        strs; // type: null
    }
}
function example3(x) {
    if (x instanceof Date) {
        x.getTime();
    }
    else {
        x.push();
    }
}
function example4(animal) {
    if ("swim" in animal) {
        animal.swim();
    }
    else {
        animal.fly();
    }
}
