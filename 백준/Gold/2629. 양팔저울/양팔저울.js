const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const weightCount = Number(input[0]);
const weights = input[1].split(" ").map(Number);
const beadCount = Number(input[2]);
const beads = input[3].split(" ").map(Number);
const dp = [true];
const array = [0, weights[0]];

dp[weights[0]] = true;

for (let i = 1; i < weightCount; i++) {
  const temp = [];

  for (let j = 0; j < array.length; j++) {
    const ableWeight1 = weights[i] + array[j];
    const ableWeight2 = Math.abs(weights[i] - array[j]);

    if (!dp[ableWeight1]) {
      dp[ableWeight1] = true;
      temp.push(ableWeight1);
    }

    if (!dp[ableWeight2]) {
      dp[ableWeight2] = true;
      temp.push(ableWeight2);
    }
  }

  array.push(...temp);
}

console.log(beads.map((weight) => (dp[weight] ? "Y" : "N")).join(" "));