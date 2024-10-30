const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n")[1].split(" ").map(Number);

let primeCount = 0;

for (i of input) {
  const count = [];
  if (i === 1) continue;
  for (let j = 2; j < i; j++) {
    if (i % j !== 0) count.push(i);
  }
  if (count.length === i - 2) primeCount++;
}

console.log(primeCount);