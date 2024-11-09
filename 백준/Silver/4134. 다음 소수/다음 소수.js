const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

const n = input.shift();
let result = [];

for (let i = 0; i < n; i++) {
  let plus = 0;
  let find = false;
  while (!find) {
    if (isPrime(input[i] + plus)) {
      result.push(input[i] + plus);
      find = true;
    }
    plus++;
  }
}

console.log(result.join("\n"));