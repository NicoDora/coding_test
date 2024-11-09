const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

function gcd(a, b) {
  c = a % b;
  if (c === 0) return b;
  return gcd(b, c);
}

const N = input.shift();
let gaps = [];
let result = 0;

for (let i = 0; i < N - 1; i++) {
  gaps.push(input[i + 1] - input[i]);
}

let gapGcd = gaps[0];

for (let i = 0; i < gaps.length - 1; i++) {
  gapGcd = gcd(gapGcd, gaps[i + 1]);
}

for (let gap of gaps) {
  result += gap / gapGcd - 1;
}

console.log(result);