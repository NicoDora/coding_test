const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const A = input[1].split(" ").map(Number);
const B = input[2].split(" ").map(Number);
const M = Number(input[3]);
const C = input[4].split(" ").map(Number);
const queue = [];

for (let i = 0; i < N; i++) {
  if (A[i] === 0) queue.push(B[i]);
}

const reverseQueue = queue.reverse();

for (let i = 0; i < M; i++) {
  reverseQueue.push(C[i]);
}

console.log(reverseQueue.slice(0, M).join(" "));