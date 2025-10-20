// create two variants: aliases && interface

// Product: price, isNew, isSale, title
// Vehicle: wheels, year, brand
// Car: type, model, + Product, + Vehicle

// interface

interface IProduct {
	price: string;
	isNew: boolean;
	isSide?: boolean;
	title: string;
}

interface IVehicle {
	wheels: number;
	year: string;
	brand: string;
}

interface ICar extends IProduct, IVehicle {
	type: string;
	model: string;
}

// type

type TProduct = {
	price: string;
	isNew: boolean;
	isSide: boolean;
	title: string;
};

type TVehicle = {
	wheels: number;
	year: string;
	brand: string;
};

type TCar = {
	type: string;
	model: string;
} & TProduct &
	TVehicle;

export {};
