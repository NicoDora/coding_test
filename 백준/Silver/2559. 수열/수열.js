const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const [N, K] = input[0].split(" ").map(Number);
const days = input[1].split(" ").map(Number);
let num = 0;

for (let i = 0; i < K; i++) {
  num += days[i];
}

let max = num;

for (let i = K; i < N; i++) {
  num += days[i] - days[i - K];
  max = Math.max(max, num);
}

console.log(max);