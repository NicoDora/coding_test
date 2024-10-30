const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n")[1].split(" ").map(Number);

let primeCount = 0;

function isPrime(n) {
  if (n < 2) return 0;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return 0;
  }
  return 1;
}

for (let i = 0; i < input.length; i++) {
  primeCount += isPrime(input[i]);
}

console.log(primeCount);