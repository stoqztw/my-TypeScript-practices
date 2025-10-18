type Level = "junior" | "middle" | "senior";

interface Developer {
	login: string;
	skills: string[];
	level: Level;
}

function gradeDeveloper(dev: { level: Level }, level: Level) {
	return (dev.level = level);
}

const stoqz: Developer = {
	login: "Stoqz",
	skills: ["ts", "js"],
	level: "junior",
};

gradeDeveloper(stoqz, "middle");
console.log(stoqz);
