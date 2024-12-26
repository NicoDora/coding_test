const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const N = Number(input[0]);
const ropes = input
  .slice(1)
  .map(Number)
  .sort((a, b) => b - a);

let maxWeight = 0;

for (let i = 0; i < N; i++) {
  const currentWeight = ropes[i] * (i + 1);
  maxWeight = Math.max(maxWeight, currentWeight);
}

console.log(maxWeight);