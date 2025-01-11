const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const N = Number(input[0]);
const games = input.slice(1);
const count = [0, 0];

for (let i = 0; i < N; i++) {
  if (games[i] === "D") count[0]++;
  else count[1]++;

  if (Math.abs(count[0] - count[1]) > 1) break;
}

console.log(count[0] + ":" + count[1]);