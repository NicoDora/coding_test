const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

function gcd(a, b) {
  c = a % b;
  if (c === 0) return b;
  return gcd(b, c);
}

const N = input.shift();
let gap = [];
let result = 0;

for (let i = 0; i < N - 1; i++) {
  gap.push(input[i + 1] - input[i]);
}

let gapGcd = gap[0];

for (let i = 0; i < gap.length - 1; i++) {
  gapGcd = gcd(gapGcd, gap[i + 1]);
}

for (i of gap) {
  result += i / gapGcd - 1;
}

console.log(result);