const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const N = Number(input[0]);
const tops = input[1].split(" ").map(Number);
const stack = [];
const result = [];

for (let i = 0; i < N; i++) {
  const currentHeight = tops[i];

  while (stack.length > 0 && stack[stack.length - 1][1] <= currentHeight) {
    stack.pop();
  }

  if (stack.length === 0) result.push(0);
  else result.push(stack[stack.length - 1][0] + 1);

  stack.push([i, currentHeight]);
}

console.log(result.join(" "));