const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const queue = input[1].split(" ").map(Number);
const stack = [];
let expected = 1;

for (let i = 0; i < N; i++) {
  const current = queue.shift();

  if (current === expected) expected++;
  else stack.push(current);

  while (stack.length > 0 && stack[stack.length - 1] === expected) {
    stack.pop();
    expected++;
  }
}

if (expected === N + 1) console.log("Nice");
else console.log("Sad");