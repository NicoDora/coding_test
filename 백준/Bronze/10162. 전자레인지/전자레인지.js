const fs = require("fs");
let T = Number(fs.readFileSync(0, "utf-8").toString().trim());

let A = Math.floor(T / 300);
T -= A * 300;

let B = Math.floor(T / 60);
T -= B * 60;

let C = Math.floor(T / 10);
T -= C * 10;

console.log(T === 0 ? `${A} ${B} ${C}` : -1);