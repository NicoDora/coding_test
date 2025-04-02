const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const N = Number(input[0]);
const solutions = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
let start = 0;
let end = N - 1;
let n1 = 0;
let n2 = Infinity;

while (start < end) {
  const a = solutions[start];
  const b = solutions[end];

  if (Math.abs(a + b) < Math.abs(n1 + n2)) {
    n1 = a;
    n2 = b;
  }

  if (a + b > 0) end--;
  else start++;
}

console.log(n1, n2);