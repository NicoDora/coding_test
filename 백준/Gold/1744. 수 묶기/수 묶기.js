const fs = require("fs");
const [N, ...array] = fs.readFileSync(0, "utf-8").toString().trim().split("\n").map(Number);

const positive = [];
const negative = [];
const one = [];
let result = 0;

for (let i = 0; i < N; i++) {
  const num = array[i];

  if (num > 1) positive.push(num);
  else if (num === 1) one.push(num);
  else negative.push(num);
}

positive.sort((a, b) => b - a);
negative.sort((a, b) => a - b);

for (let i = 0; i < positive.length; i += 2) {
  if (i + 1 < positive.length) result += positive[i] * positive[i + 1];
  else result += positive[i];
}

for (let i = 0; i < negative.length; i += 2) {
  if (i + 1 < negative.length) result += negative[i] * negative[i + 1];
  else result += negative[i];
}

for (let i = 0; i < one.length; i++) {
  result += one[i];
}

console.log(result);