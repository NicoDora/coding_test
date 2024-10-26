const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

const remainder = input.map((e) => e % 42);
const set = new Set(remainder);
const result = [...set].length;

console.log(result);