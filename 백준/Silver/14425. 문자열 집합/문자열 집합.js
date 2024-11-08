const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const set = new Set();
let result = 0;

for (let i = 0; i < N; i++) {
  set.add(input[i]);
}

for (let i = N; i < N + M; i++) {
  result += set.has(input[i]) ? 1 : 0;
}

console.log(result);