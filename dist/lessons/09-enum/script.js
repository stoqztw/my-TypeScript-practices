"use strict";
var ShapeKind;
(function (ShapeKind) {
    ShapeKind[ShapeKind["Circle"] = 12] = "Circle";
    ShapeKind[ShapeKind["Square"] = 13] = "Square";
})(ShapeKind || (ShapeKind = {}));
const myShape = ShapeKind.Circle;
const circle1 = {
    radius: 2,
    kind: ShapeKind.Circle,
};
// пример
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["ERROR"] = 500] = "ERROR";
    StatusCodes[StatusCodes["NOT_FOUND"] = 404] = "NOT_FOUND";
    StatusCodes[StatusCodes["NOT_AUTH"] = 403] = "NOT_AUTH";
})(StatusCodes || (StatusCodes = {}));
var Grages;
(function (Grages) {
    Grages["Junior"] = "junior";
    Grages["Middle"] = "middle";
    Grages["Senior"] = "senior";
})(Grages || (Grages = {}));
const dev3 = {
    level: Grages.Senior,
    login: "test",
    skills: ["ts"],
};
function upLevelDev(user) {
    switch (user.level) {
        case Grages.Junior:
            user.level = Grages.Middle;
            break;
        case Grages.Middle:
            user.level = Grages.Senior;
            break;
        case Grages.Senior:
            console.log("His level is max!");
            break;
    }
}
upLevelDev(dev3);
console.log(dev3);
