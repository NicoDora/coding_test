const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const score = input[1].split(" ").map(Number);
const maxScore = Math.max(...score);
const avg =
  score
    .map((e) => (e / maxScore) * 100)
    .reduce((previousValue, currentValue) => previousValue + currentValue) /
  score.length;

console.log(avg);