interface IDeveloper {
	firstName: string;
	lastName: string;
	country: string;
	continent: string;
	age: number;
	language: string;
	greeting?: string;
}

const list1: IDeveloper[] = [
	{
		firstName: "Sofia",
		lastName: "I.",
		country: "Argentina",
		continent: "Americas",
		age: 35,
		language: "Java",
	},
	{
		firstName: "Lukas",
		lastName: "X.",
		country: "Croatia",
		continent: "Europe",
		age: 35,
		language: "Python",
	},
	{
		firstName: "Madison",
		lastName: "U.",
		country: "United States",
		continent: "Americas",
		age: 32,
		language: "Ruby",
	},
];

function greetDevelopers(list: IDeveloper[]): IDeveloper[] {
	return list.map((obj) => {
		return {
			...obj,
			greeting: `Hi ${obj.firstName}, what do you like the most about ${obj.language}`
		}
	});
}


console.log(greetDevelopers(list1))