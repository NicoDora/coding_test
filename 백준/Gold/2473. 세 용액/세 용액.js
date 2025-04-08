const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const N = Number(input[0]);
const solutions = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
let min = Infinity;
let result = [0, 0, 0];

for (let i = 0; i < N - 2; i++) {
  const a = solutions[i];
  let front = i + 1;
  let rear = N - 1;

  while (front < rear) {
    const b = solutions[front];
    const c = solutions[rear];
    const sum = a + b + c;

    if (Math.abs(sum) < min) {
      min = Math.abs(sum);
      result = [a, b, c];
    }

    if (sum > 0) rear--;
    else front++;
  }
}

console.log(result.join(" "));