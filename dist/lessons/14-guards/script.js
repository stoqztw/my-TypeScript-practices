"use strict";
function isFish(pet) {
    return pet.swim !== undefined;
}
function example4(animal) {
    if (isFish(animal)) {
        return animal.swim();
    }
    return animal.fly();
}
