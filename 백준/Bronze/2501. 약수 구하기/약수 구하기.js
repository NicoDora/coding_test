const fs = require("fs");
const [N, K] = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

const divisorArray = [];

for (let i = 1; i < N + 1; i++) {
  if (N % i === 0) {
    if (divisorArray.includes(i)) break;
    divisorArray.push(i);
  }
}

const result = divisorArray[K - 1] ? divisorArray[K - 1] : 0;

console.log(result);