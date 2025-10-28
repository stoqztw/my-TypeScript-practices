function tupleCreator(first) {
	let a = first;

	return function (second) {
		a++;
		return [a, second];
	};
}

const twoTupleWith1 = tupleCreator(1);
const val1 = twoTupleWith1(2);
const val2 = twoTupleWith1(2);
const val3 = twoTupleWith1(2);

console.log(twoTupleWith1, val1)
console.log(twoTupleWith1, val2)
console.log(twoTupleWith1, val3)