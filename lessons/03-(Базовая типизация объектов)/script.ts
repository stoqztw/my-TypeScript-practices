// если нам нужны другие поля, кол-ов которых не предсказуемо, то можно использовать:
interface Car {
	wheels: number,
	brand: string,
	type: string,
	isNew?: boolean,
	name?: string,

	[key: string]: unknown;
}

const car: Car = {
	wheels: 4,
	brand: 'BMW',
	type: 'Sedan',
}

car.new = 1;
console.log(car);

// car.brand = 1 - не верно
car.brand = '1' // - верно

// можно использовать один и тот же интерфейс для нескольких объектов
const carTwo: Car = {
	brand: 'Audi',
	type: 'Sedan',
	wheels: 6,
	isNew: true
}

