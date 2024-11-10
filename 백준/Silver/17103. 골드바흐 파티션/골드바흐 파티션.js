const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

const T = input.shift();
const max = Math.max(...input);
const array = Array(max).fill(1);
const result = [];

for (let i = 2; i <= Math.sqrt(max); i++) {
  if (array[i]) {
    for (let j = i * i; j <= max; j += i) {
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