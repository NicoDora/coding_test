const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

const K = input.shift();
const array = [];
let result = 0;

for (let i = 0; i < K; i++) {
  const n = input[i];
  if (n === 0) array.pop();
  else array.push(n);
}

for (let i = 0; i < array.length; i++) {
  result += array[i];
}

console.log(result);