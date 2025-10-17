"use strict";
function login(user) {
    if (user.login && user.password) {
        console.log(`Hello, ${user.login}`);
    }
    else {
        console.log("Login or password is empty!");
    }
}
const userArtem = {
    login: "Artem",
    email: "123424@gmail.com",
    password: "12314342",
    isOnline: true,
    lastVisited: new Date(),
};
const adminAlex = {
    login: "Alex",
    email: "123424@gmail.com",
    password: "12314342",
    isOnline: true,
    lastVisited: new Date(),
    role: "superUser",
};
login(userArtem);
login(adminAlex);
