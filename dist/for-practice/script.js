"use strict";
// function validatePin(pin: string): boolean {
// 	const arrPin = pin.split("");
// 	for (let i = 0; i < arrPin.length; i++) {
// 		if (typeof arrPin[i] !== "number") {
// 			return false;
// 		}
// 	}
// 	switch (arrPin.length) {
// 		case 4:
// 			return true;
// 		case 6:
// 			return true;
// 		default:
// 			return false;
// 	}
// 	throw new Error("The method or operation is not implemented.");
// }
function validatePin(pin) {
    return (/^\d{4}(\d{2})?$/gi).test(pin);
}
console.log(validatePin("123224"));
