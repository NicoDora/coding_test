const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const N = Number(input[0]);
const A = input[1].split(" ").map(Number);
const stack = [];
const result = Array(N).fill(-1);

stack.push(0);

for (let i = 1; i < N; i++) {
  while (stack.length && A[stack[stack.length - 1]] < A[i]) {
    result[stack.pop()] = A[i];
  }

  stack.push(i);
}

console.log(result.join(" "));