var obj = { a: 1 };

function f(x) {
	x = { a: 5};
}

f(obj);
console.log(obj);
