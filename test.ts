// const likes = (a: string[]): string => {
// 	let mess = "";

// 	if (a.length > 0) {
// 		for (let i = 0; i < a.length; i++) {
// 			if (a.length == 1) {
// 				mess = `${a[i]}`;
// 			}
// 		}
// 	} else {
// 		mess = "no one";
// 	}

// 	return mess + " likes this";
// };

const likes = (a: string[]): string => {
	let mess = "";

	if (a.length > 0) {
		for (let i = 0; i < a.length; i++) {
			let x = a[i] !== undefined ? a[i] : ;
			x.join
		}
	} else {
		mess = "no one";
	}

	return mess + " likes this";
};

console.log(likes(['Peter', 'test']));
