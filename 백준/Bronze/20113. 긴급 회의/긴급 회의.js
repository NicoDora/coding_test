const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const N = Number(input[0]);
const players = input[1].split(" ").map(Number);
const vote = Array(N + 1).fill(0);

for (let i = 0; i < N; i++) {
  vote[players[i]]++;
}

vote.shift();

const sorted = [...vote].sort((a, b) => b - a);

if (sorted[0] === sorted[1]) console.log("skipped");
else console.log(vote.indexOf(sorted[0]) + 1);