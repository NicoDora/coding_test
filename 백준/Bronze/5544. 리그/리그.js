const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const N = Number(input[0]);
const map = new Map();

for (let i = 1; i <= (N * (N - 1)) / 2; i++) {
  const [A, B, scoreA, scoreB] = input[i].split(" ").map(Number);
  const currentScoreA = map.get(A) || 0;
  const currentScoreB = map.get(B) || 0;

  if (scoreA > scoreB) map.set(A, currentScoreA + 3);
  else if (scoreB > scoreA) map.set(B, currentScoreB + 3);
  else {
    map.set(A, currentScoreA + 1);
    map.set(B, currentScoreB + 1);
  }
}

const sorted = [...map].sort((a, b) => b[1] - a[1]);
const ranks = new Map();
let rank = 1;

for (let i = 0; i < sorted.length; i++) {
  if (i > 0 && sorted[i][1] < sorted[i - 1][1]) rank = i + 1;
  ranks.set(sorted[i][0], rank);
}

console.log(
  [...ranks]
    .sort((a, b) => a[0] - b[0])
    .map((e) => e[1])
    .join("\n")
);