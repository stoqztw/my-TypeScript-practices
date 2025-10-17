"use strict";
function sum(a, b) {
    return a + b;
}
const sum2 = (a, b) => {
    return a + b;
};
sum(2, 2);
function log(name, userId) {
    console.log(`Hello ${name}, his id ${userId || '12'}`);
}
log('Alex', '33');
function crash() {
    throw new Error('crash');
}
function avarage(...nums) {
    const sum = nums.reduce((sum, cur) => sum + cur, 0);
    return sum / nums.length;
}
console.log(avarage(9, 2, 2, 10));
