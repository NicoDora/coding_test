const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = Number(input.shift());
const result = [];

function gcd(a, b) {
  c = a % b;
  if (c === 0) return b;
  return gcd(b, c);
}

for (let i = 0; i < T; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  result.push((a * b) / gcd(a, b));
}

console.log(result.join("\n"));