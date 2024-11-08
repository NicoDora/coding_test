const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const M = Number(input[2]);
const myNumbers = input[1].split(" ").map(Number);
const reqNumbers = input[3].split(" ").map(Number);
const map = new Map();
let result = [];

for (let i = 0; i < N; i++) {
  if (map.has(myNumbers[i])) map.set(myNumbers[i], map.get(myNumbers[i]) + 1);
  else map.set(myNumbers[i], 1);
}

for (let i = 0; i < M; i++) {
  result.push(map.get(reqNumbers[i]) ? map.get(reqNumbers[i]) : 0);
}

console.log(result.join(" "));