const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const T = Number(input[0]);
const result = [];
let index = 1;

for (let t = 0; t < T; t++) {
  const N = Number(input[index++]);
  const ranking = [];

  for (let i = 0; i < N; i++) {
    const score = input[index++].split(" ").map(Number);
    ranking.push(score);
  }

  ranking.sort((a, b) => a[0] - b[0]);

  let maxScore = N;
  let count = 0;

  for (const [a, b] of ranking) {
    if (b <= maxScore) {
      maxScore = b;
      count++;
    }
  }

  result.push(count);
}

console.log(result.join("\n"));