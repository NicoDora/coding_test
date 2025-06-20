const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const weights = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
let reachableWeight = 0;

for (const weight of weights) {
  if (weight > reachableWeight + 1) break;
  reachableWeight += weight;
}

console.log(reachableWeight + 1);