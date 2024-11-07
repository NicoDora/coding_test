const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input.shift());
const array = new Array(201).fill("");

for (let i = 0; i < N; i++) {
  const age = Number(input[i].split(" ")[0]);
  array[age] += input[i] + "\n";
}

console.log(array.join(""));