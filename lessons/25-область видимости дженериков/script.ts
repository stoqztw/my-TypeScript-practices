export function tupleCreator<T>(first: T) {
	return function <U>(second: U): [T, U] {
		return [first, second];
	};
}

const twoTupleWith1 = tupleCreator(1);
const val1 = twoTupleWith1(2);