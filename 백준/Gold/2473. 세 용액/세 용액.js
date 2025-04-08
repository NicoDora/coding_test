const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const N = Number(input[0]);
const solutions = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
let min = Infinity;
let result = [];

for (let i = 0; i < N - 2; i++) {
  const a = solutions[i];
  let front = i + 1;
  let rear = N - 1;
  let sumTemp = Infinity;
  let absTemp = Infinity;
  let tempArray = [];

  while (front < rear) {
    const b = solutions[front];
    const c = solutions[rear];

    if (Math.abs(a + b + c) < absTemp) {
      sumTemp = a + b + c;
      absTemp = Math.abs(a + b + c);
      tempArray = [a, b, c];
    }

    if (a + b + c > 0) rear--;
    else front++;
  }

  if (absTemp < min) {
    min = absTemp;
    result = tempArray;
  }
}

console.log(result.join(" "));