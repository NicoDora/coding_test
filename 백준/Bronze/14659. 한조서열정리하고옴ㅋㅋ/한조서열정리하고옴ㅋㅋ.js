const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const N = Number(input[0]);
const array = input[1].split(" ").map(Number);
const nextGreaterIndex = Array(N).fill(N);
// stack: [height, index]
const stack = [];
let result = 0;

for (let i = N - 1; i >= 0; i--) {
  const h = array[i];

  while (stack.length && stack[stack.length - 1][0] <= h) stack.pop();

  if (stack.length) nextGreaterIndex[i] = stack[stack.length - 1][1];

  stack.push([h, i]);
}

for (let i = 0; i < N; i++) {
  const kills = nextGreaterIndex[i] - i - 1;
  if (kills > result) result = kills;
}

console.log(result);