const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const N = Number(input[0]);
const A = input[1].split(" ").map(Number);
const dp = Array(N).fill(1);
const prev = Array(N).fill(-1);

for (let i = 0; i < N; i++) {
  for (let j = 0; j < i; j++) {
    if (A[j] < A[i] && dp[j] + 1 > dp[i]) {
      dp[i] = dp[j] + 1;
      prev[i] = j;
    }
  }
}

let maxLength = Math.max(...dp);
let index = dp.indexOf(maxLength);

const lis = [];

while (index !== -1) {
  lis.push(A[index]);
  index = prev[index];
}

console.log(maxLength + "\n" + lis.reverse().join(" "));