const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const numbers = input[1].split(" ").map(Number);
let primeCount = 0;

for (let i = 0; i < Number(input[0]); i++) {
  const num = numbers[i];
  if (num < 2) continue;

  let isPrime = true;

  for (let j = 2; j < num; j++) {
    if (num % j === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) primeCount++;
}

console.log(primeCount);