"use strict";
function gradeDeveloper(dev, level) {
    return (dev.level = level);
}
const stoqz = {
    login: "Stoqz",
    skills: ["ts", "js"],
    level: "junior",
};
gradeDeveloper(stoqz, "middle");
console.log(stoqz);
