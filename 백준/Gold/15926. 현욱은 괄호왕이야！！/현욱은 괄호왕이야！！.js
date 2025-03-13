const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const n = Number(input[0]);
const array = input[1];
const stack = [-1];
let count = 0;

for (let i = 0; i < n; i++) {
  if (array[i] === "(") stack.push(i);
  else {
    stack.pop();
    if (!stack.length) stack.push(i);
    count = Math.max(count, i - stack[stack.length - 1]);
  }
}

console.log(count);