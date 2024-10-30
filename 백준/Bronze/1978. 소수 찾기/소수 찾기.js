const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const numbers = input[1].split(" ").map(Number);
let primeCount = 0;

function isPrime(n) {
  if (n < 2) return 0;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return 0;
  }
  return 1;
}

for (let i = 0; i < Number(input[0]); i++) {
  primeCount += isPrime(numbers[i]);
}

console.log(primeCount);