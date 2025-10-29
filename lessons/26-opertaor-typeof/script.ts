import { avarage } from "../02-(Базовая типизация функций)/script";

let str = 'Hello world';
type x = typeof str;

type fn = typeof avarage;
const max: fn = (...nums) => Math.max(...nums);
max(1, 3, 3);

type ReturnFn = ReturnType<fn>; // тот же тип, что и у значения возвращшемой функции