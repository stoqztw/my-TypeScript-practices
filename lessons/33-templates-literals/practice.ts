export {};

type Style = "none" | "dotted" | "dashed" | "solid";
type Color = "Red" | "Green" | "Blue" | "Black" | "White";

// border-style: solid
type BorderStyle = `${Style} ${Uncapitalize<Color>}`;

let borderStyle: BorderStyle = "solid red";
