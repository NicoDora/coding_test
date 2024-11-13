const fs = require("fs");
const [N, K] = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

function factorial(num) {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
}

console.log(factorial(N) / (factorial(K) * factorial(N - K)));