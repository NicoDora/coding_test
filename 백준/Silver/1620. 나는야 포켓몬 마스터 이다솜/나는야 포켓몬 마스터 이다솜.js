const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const map = new Map();
let result = [];

for (let i = 1; i <= N; i++) {
  map.set(String(i), input[i]);
  map.set(input[i], String(i));
}

for (let i = N + 1; i < N + M + 1; i++) {
  result.push(map.get(input[i]));
}

console.log(result.join("\n"));