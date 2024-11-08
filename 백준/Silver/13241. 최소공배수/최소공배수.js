const fs = require("fs");
const [A, B] = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

function gcd(a, b) {
  c = a % b;
  if (c === 0) return b;
  return gcd(b, c);
}

console.log((A * B) / gcd(A, B));