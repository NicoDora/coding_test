const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const N = Number(input[0]);
const A = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
const B = input[2]
  .split(" ")
  .map(Number)
  .sort((a, b) => b - a);
let result = 0;

for (let i = 0; i < N; i++) {
  result += A[i] * B[i];
}

console.log(result);