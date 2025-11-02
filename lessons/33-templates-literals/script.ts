export {};

type Side = "top" | "right" | "bottom" | "left";
type Margin = `margin${Side}`;
// Margin = 'margin-top' | 'margin-right' | 'margin-bottom' | 'margin-left';

type SideTwo = "top" | "right" | "bottom" | "left";
type MarginCamelCase = `margin${Capitalize<Side>}`;
// Margin = 'marginTop' | 'marginRight' | 'marginBottom' | 'marginLeft';

type Derection = "down" | "left" | "right" | "up";
type Position = "top" | "bottom";
type Entry = "in" | "out";
type FadeClassNames = `fade${Capitalize<Entry>}${Capitalize<
	"" | Derection | Position
>}`;

interface Car {
	brand: string;
	model: string;
	year: number;
}

type CarFActory = {
	[K in keyof Car as `set${Capitalize<K>}`]: (car: Car, value: Car[K]) => void;
};

