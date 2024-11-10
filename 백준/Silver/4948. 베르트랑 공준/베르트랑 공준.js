const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

const array = new Array(123456 * 2 + 1).fill(1);
const result = [];

for (let i = 2; i <= Math.sqrt(array.length); i++) {
  if (array[i]) {
    for (let j = i * i; j <= 123456 * 2; j += i) {
      array[j] = 0;
    }
  }
}

for (let i = 0; i < input.length - 1; i++) {
  const n = input[i];
  let count = 0;

  for (let j = n + 1; j <= n * 2; j++) {
    if (array[j]) count++;
  }

  result.push(count);
}

console.log(result.join("\n"));