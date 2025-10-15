"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// numbers
let x = 10.5;
let y = 12212n;
let z = NaN;
// (большие числа нельзя писать с плавующей точкой)
// let v = 12212.4n;
// string
let str = 'Hello World', str2 = 'Test';
let symb = Symbol('as');
// boolean
let bool = true;
bool = false;
// nothing (нужно явно указывать)
let h = undefined, g = null;
// literal (конкретное значение)
const num = 108;
const str3 = 'HAHAH';
// universal (динамическое значение, !!! в крайнем случае)
let mm = 1;
mm = 'aa';
mm = [];
// unknow
let xx = 'a';
if (typeof (xx) === 'string') {
    xx.toUpperCase();
}
//# sourceMappingURL=script.js.map