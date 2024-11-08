const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const M = Number(input[2]);
const myNumbers = input[1].split(" ").map(Number);
const reqNumbers = input[3].split(" ").map(Number);
const map = new Map();
let result = [];

for (let i = 0; i < N; i++) {
  const number = map.get(myNumbers[i]);
  if (number) map.set(myNumbers[i], number + 1);
  else map.set(myNumbers[i], 1);
}

for (let i = 0; i < M; i++) {
  const number = map.get(reqNumbers[i]);
  result.push(number ? number : 0);
}

console.log(result.join(" "));