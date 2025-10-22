export type User = {
	name: string;
	displayName: string | null;
};

function assertDisplayName(
	user: User
): asserts user is User & { displayName: string } {
	if (user.displayName === null)
		throw new Error("User has no displayName field");
}

function loguserByDiaplayName(user: User) {
	assertDisplayName(user);
	console.log(user.displayName.toUpperCase());
}
