const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const numbers = input[1].split(" ").map(Number);
let result = 0;

for (let i = 0; i < N - 2; i++) {
  for (let j = i + 1; j < N - 1; j++) {
    for (let k = j + 1; k < N; k++) {
      const sum = numbers[i] + numbers[j] + numbers[k];
      if (sum <= M && sum > result) {
        result = sum;
      }
    }
  }
}

console.log(result);