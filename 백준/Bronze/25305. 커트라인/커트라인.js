const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const k = Number(input[0].split(" ")[1]);
const x = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => b - a);

console.log(x[k - 1]);