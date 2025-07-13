const fs = require("fs");
const [n, ...input] = fs.readFileSync(0, "utf-8").toString().trim().split("\n").map(Number);

const stack = [];
const result = [];
let current = 1;
let able = true;
let i = 0;

while (i < n) {
  const target = input[i];

  while (current <= target) {
    stack.push(current++);
    result.push("+");
  }

  if (stack[stack.length - 1] === target) {
    stack.pop();
    result.push("-");
    i++;
  } else {
    able = false;
    break;
  }
}

console.log(able ? result.join("\n") : "NO");