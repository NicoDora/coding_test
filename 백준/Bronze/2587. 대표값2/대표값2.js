const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number).sort((a, b) => a - b);

let sum = 0;

for (let i = 0; i < input.length; i++) {
  sum += input[i];
}

const avg = sum / input.length;

console.log(avg);
console.log(input[2]);