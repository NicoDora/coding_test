const fs = require("fs");
const [N, ...H] = fs.readFileSync(0, "utf-8").toString().trim().split("\n").map(Number);

const stack = [];
let sum = 0;

stack.push([H.pop(), 0]);

for (let i = N - 2; i >= 0; i--) {
  const current = H[i];
  let count = 0;

  while (stack.length > 0 && current > stack[stack.length - 1][0]) {
    count += stack.pop()[1] + 1;
  }

  stack.push([current, count]);
  sum += count;
}

console.log(sum);