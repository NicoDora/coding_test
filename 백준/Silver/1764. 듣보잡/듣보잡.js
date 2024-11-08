const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const set = new Set(input.slice(0, N));
const array = input.slice(N);
let result = [];

for (let i = 0; i < M; i++) {
  if (set.has(array[i])) result.push(array[i]);
}

console.log(result.length);
console.log(result.sort().join("\n"));