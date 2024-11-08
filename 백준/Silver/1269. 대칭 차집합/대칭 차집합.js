const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const A = new Set(input[1].split(" "));
const B = new Set(input[2].split(" "));

const A_B = [...A].filter((e) => !B.has(e));
const B_A = [...B].filter((e) => !A.has(e));

console.log([...A_B, ...B_A].length);