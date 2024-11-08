const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const set1 = new Set();
const set2 = new Set();
let result = [];

for (let i = 0; i < N; i++) {
  set1.add(input[i]);
}

for (let i = N; i < N + M; i++) {
  set2.add(input[i]);
}

let bigSet = set1;
let smallSet = set2;

if (set1.size < set2.size) {
  bigSet = set2;
  smallSet = set1;
}

for (let name of smallSet) {
  if (bigSet.has(name)) result.push(name);
}

console.log(result.length);
console.log(result.sort((a, b) => (a > b ? 1 : -1)).join("\n"));