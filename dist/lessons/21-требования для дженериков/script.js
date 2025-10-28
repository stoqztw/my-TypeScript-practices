"use strict";
function len(arg) {
    return arg.length;
}
len('aaa');
len([1, 2]);
len({ length: 1 });
// len(1) - error
