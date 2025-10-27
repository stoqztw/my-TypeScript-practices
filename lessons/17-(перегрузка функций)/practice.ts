// function head(value: string | number[] | boolean[]): string | number | boolean {
// 	return value[0];
// }

function head(value: string): string;
function head(value: number[]): number;
function head(value: boolean[]): boolean;
function head(value: any): any {
	return value[0];
}

head([1, 2, 3]);

export{}