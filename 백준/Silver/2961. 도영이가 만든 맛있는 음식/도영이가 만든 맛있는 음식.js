const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const N = Number(input[0]);
const ingredients = input.slice(1).map((row) => row.split(" ").map(Number));
let minDiff = Infinity;

for (let i = 1; i < 1 << N; i++) {
  let sour = 1;
  let bitter = 0;

  for (let j = 0; j < N; j++) {
    if (i & (1 << j)) {
      sour *= ingredients[j][0];
      bitter += ingredients[j][1];
    }
  }

  minDiff = Math.min(minDiff, Math.abs(sour - bitter));
}

console.log(minDiff);