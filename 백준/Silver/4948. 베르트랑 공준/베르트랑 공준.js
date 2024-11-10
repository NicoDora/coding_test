const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

function countPrime(num) {
  if (num === 1) return 1;

  const array = new Array(num * 2).fill(1);
  const prime = [];

  for (let i = 2; i <= Math.sqrt(num * 2); i++) {
    if (array[i]) {
      for (let j = i * i; j <= num * 2; j += i) {
        array[j] = 0;
      }
    }
  }

  array[1] = 0;

  for (let i = num + 1; i <= num * 2; i++) {
    if (array[i]) prime.push(i);
  }

  return prime.length;
}

const result = [];

for (let i = 0; i < input.length - 1; i++) {
  result.push(countPrime(input[i]));
}

console.log(result.join("\n"));