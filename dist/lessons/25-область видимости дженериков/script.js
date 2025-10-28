export function tupleCreator(first) {
    return function (second) {
        return [first, second];
    };
}
const twoTupleWith1 = tupleCreator(1);
const val1 = twoTupleWith1(2);
