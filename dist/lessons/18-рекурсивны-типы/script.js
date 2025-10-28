"use strict";
const nums = [1, 2, [1, 4]];
nums.push(1);
nums.push(1, [12, 2]);
function isJSON(arg) {
}
isJSON('12');
isJSON(12);
isJSON([12, { a: 12 }]);
