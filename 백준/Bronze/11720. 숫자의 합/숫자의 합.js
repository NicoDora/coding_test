const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const numbers = input[1].slice().split("").map(Number);
const result = numbers.reduce((p, c) => p + c);

console.log(result);