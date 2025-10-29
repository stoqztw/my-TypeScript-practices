var once = function(fn) {

    let count = 0;
    return function(...args){
        if (count > 0) {
            return undefined;
        }
        count++;
        return fn(...args);
    }
};

const a = once((a,b,c) => (a + b + c));
const b = a(1, 2, 3);
const c = a(1, 2, 3);

console.log(b);
console.log(c);