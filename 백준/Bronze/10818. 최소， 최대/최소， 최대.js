const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const count = Number(input[0]);
const numbers = input[1].split(" ").map(Number);
let min = 1000000;
let max = -1000000;

for (let i = 0; i < count; i++) {
  if (numbers[i] < min) min = numbers[i];
  if (numbers[i] > max) max = numbers[i];
}

console.log(`${min} ${max}`);