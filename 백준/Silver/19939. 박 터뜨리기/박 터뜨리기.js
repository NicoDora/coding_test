const fs = require("fs");
const [N, K] = fs.readFileSync(0, "utf-8").toString().trim().split(" ").map(Number);

const minBalls = (K * (K + 1)) / 2;
let result = 0;

if (N >= minBalls) {
  const base = Math.floor((N - minBalls) / K);
  const remainder = (N - minBalls) % K;

  const smallest = 1 + base;
  const largest = K + base + (remainder > 0 ? 1 : 0);

  result = largest - smallest;
} else {
  result = -1;
}

console.log(result);