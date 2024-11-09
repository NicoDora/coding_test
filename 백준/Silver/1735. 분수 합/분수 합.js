const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function gcd(a, b) {
  c = a % b;
  if (c === 0) return b;
  return gcd(b, c);
}

const [num1, denom1] = input[0].split(" ").map(Number);
const [num2, denom2] = input[1].split(" ").map(Number);

const denomLcm = (denom1 * denom2) / gcd(denom1, denom2);
const sumNum = num1 * (denomLcm / denom1) + num2 * (denomLcm / denom2);

console.log(sumNum / gcd(sumNum, denomLcm), denomLcm / gcd(sumNum, denomLcm));