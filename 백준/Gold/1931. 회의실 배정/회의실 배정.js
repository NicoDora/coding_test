const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const N = Number(input[0]);
const meetings = input.slice(1).map((line) => line.split(" ").map(Number));
let count = 0;
let lastTime = 0;

meetings.sort((a, b) => a[1] - b[1] || a[0] - b[0]);

for (let i = 0; i < N; i++) {
  if (meetings[i][0] >= lastTime) {
    count++;
    lastTime = meetings[i][1];
  }
}

console.log(count);