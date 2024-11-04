const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

let [a, b, c, d, e, f] = input.map(Number);

const divisor = a * e - d * b;

const x = parseInt((c * e - f * b) / divisor);
const y = parseInt((f * a - c * d) / divisor);

console.log(x, y);