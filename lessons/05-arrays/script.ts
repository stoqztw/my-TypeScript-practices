const nums = [1, 2, 3, 4, 5, 6];

const strs: string[] = [];
strs.push("test");

console.log(strs);

interface Car1 {
	wheels: number;
	brand: string;
}

const cars: Car1[] = [];
cars.push({ brand: "BWM", wheels: 4 });
// запушить получится только объект с интерфесом Car

// array in array
const arrOfArr: string[][] = [["sd"], ["sd"]];
arrOfArr.push(["AA"]);

function printArr(arr: unknown[]): void {
	arr.forEach((item, id, array) => {
		console.log(item, id, array);
	});
}
