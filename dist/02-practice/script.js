"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function slice(str, start, end) {
    let newStr = '';
    let lastIndex;
    if (end) {
        lastIndex = end > str.length ? str.length : end;
    }
    else {
        lastIndex = str.length;
    }
    for (let i = start; i < lastIndex; i++) {
        newStr += str[i];
    }
    return newStr;
}
console.log(slice('test', 2));
//# sourceMappingURL=script.js.map