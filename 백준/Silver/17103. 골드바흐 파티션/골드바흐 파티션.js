const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

const T = input.shift();
const array = Array(1000001).fill(1);
const result = [];

for (let i = 2; i <= Math.sqrt(array.length); i++) {
  if (array[i]) {
    for (let j = i * i; j <= array.length; j += i) {
      array[j] = 0;
    }
  }
}

for (let i = 0; i < T; i++) {
  const n = input[i];
  let count = 0;

  for (let p = 2; p <= n / 2; p++) {
    if (array[p] && array[n - p]) count++;
  }

  result.push(count);
}

console.log(result.join("\n"));