const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
let result = input[1].split(" ").map(Number);
const numbers = [...new Set(result)].sort((a, b) => a - b);

const map = new Map();

for (let i = 0; i < numbers.length; i++) {
  map.set(numbers[i], i);
}

for (let i = 0; i < N; i++) {
  result[i] = map.get(result[i]);
}

console.log(result.join(" "));