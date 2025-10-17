interface User {
	login: string;
	email: string;
	password: string;
	isOnline: boolean;
	lastVisited: Date;
}

interface Admin extends User {
	role: string;
}

function login(user: { login: string; password: string }): void {
	if (user.login && user.password) {
		console.log(`Hello, ${user.login}`);
	} else {
		console.log("Login or password is empty!");
	}
}

const userArtem: User = {
	login: "Artem",
	email: "123424@gmail.com",
	password: "12314342",
	isOnline: true,
	lastVisited: new Date(),
};

const adminAlex: Admin = {
	login: "Alex",
	email: "123424@gmail.com",
	password: "12314342",
	isOnline: true,
	lastVisited: new Date(),
	role: "superUser",
};

login(userArtem);
login(adminAlex);
