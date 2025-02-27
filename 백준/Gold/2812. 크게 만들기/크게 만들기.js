const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const [N, K] = input[0].split(" ").map(Number);
const numArray = input[1].split("").map(Number);
const stack = [numArray[0]];
let k = K;

for (let i = 1; i < N; i++) {
  const current = numArray[i];

  while (current > stack[stack.length - 1] && k > 0) {
    stack.pop();
    k--;
  }

  stack.push(current);
}

while (k > 0) {
  stack.pop();
  k--;
}

console.log(stack.join(""));