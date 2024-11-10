const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function stackProgram(cmd) {
  const [cmdNum, X] = cmd.split(" ").map(Number);

  switch (cmdNum) {
    case 1:
      stack.push(X);
      break;
    case 2:
      result.push(stack.pop() || -1);
      break;
    case 3:
      result.push(stack.length);
      break;
    case 4:
      result.push(stack.length ? 0 : 1);
      break;
    case 5:
      result.push(stack.at(-1) || -1);
  }
}

const N = Number(input.shift());
const stack = [];
const result = [];

for (cmd of input) {
  stackProgram(cmd);
}

console.log(result.join("\n"));