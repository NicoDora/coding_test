const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

function gcd(a, b) {
  c = a % b;
  if (c === 0) return b;
  return gcd(b, c);
}

const N = Number(input[0]);
const A = input[1].split(" ").map(Number);
const X = Number(input[2]);
const coprime = [];
let sum = 0;

for (let i = 0; i < N; i++) {
  if (gcd(X, A[i]) === 1) coprime.push(A[i]);
}

for (let i = 0; i < coprime.length; i++) {
  sum += coprime[i];
}

console.log(sum / coprime.length);