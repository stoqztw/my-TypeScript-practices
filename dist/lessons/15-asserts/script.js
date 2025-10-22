function assertDisplayName(user) {
    if (user.displayName === null)
        throw new Error("User has no displayName field");
}
function loguserByDiaplayName(user) {
    assertDisplayName(user);
    console.log(user.displayName.toUpperCase());
}
export {};
