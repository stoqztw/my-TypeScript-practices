const arr = ["a", "b", "c"];

arr.forEach((item) => {
	if (typeof item !== "string") {
		return false;
	}
});
