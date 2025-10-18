"use strict";
function duplicateCount(text) {
    const result = text.toLowerCase().match(/(.)(?=.*\1)/gi);
    return result !== null ? new Set(result).size : 0;
}
// function duplicateCount(text: string): number {
// 	const strToArr: string[] = text.toLowerCase().split("");
// 	const result: string[] = [];
// 	for (let i = 0; i < strToArr.length; i++) {
// 		for (let j = i + 1; j < strToArr.length; j++) {
// 			let c = strToArr[i];
// 			if (strToArr[i] === strToArr[j] && c !== undefined) {
// 				result.push(c);
// 			}
// 		}
// 	}
// 	return new Set(result).size;
// }
console.log(duplicateCount("Indivisibilities"));
