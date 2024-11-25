const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const array = input[1].split(" ").map(Number);
const prefixSum = new Array(N + 1).fill(0);
const result = [];

for (let i = 1; i <= N; i++) {
  prefixSum[i] = prefixSum[i - 1] + array[i - 1];
}

for (let k = 2; k < M + 2; k++) {
  const [i, j] = input[k].split(" ").map(Number);
  result.push(prefixSum[j] - prefixSum[i - 1]);
}

console.log(result.join("\n"));