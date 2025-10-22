"use strict";
// Дополните решение так, чтобы оно возвращало значение true, если первый переданный аргумент (строка) заканчивается вторым аргументом (также строкой).
function solution(str, ending) {
	let index = 1;
    for (let i = ending.length; i > 0; i--) {
        if (ending.split("")[i - 1] != str.split("")[str.length - index]) {
            return false;
        }
		index++;
    }
    return true;
}
console.log(solution("abc", "vc"));
