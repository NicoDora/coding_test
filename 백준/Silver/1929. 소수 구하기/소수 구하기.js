const fs = require("fs");
const [M, N] = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

const array = new Array(N + 1).fill(1);
const result = [];

for (let i = 2; i <= Math.sqrt(N); i++) {
  if (array[i]) {
    for (let j = i * i; j <= N; j += i) {
      array[j] = 0;
    }
  }
}

array[1] = 0;

for (let i = M; i <= N; i++) {
  if (array[i]) result.push(i);
}

console.log(result.join("\n"));