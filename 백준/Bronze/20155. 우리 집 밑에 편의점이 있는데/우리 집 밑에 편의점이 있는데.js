const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const X = input[1].split(" ").map(Number);
const count = Array(M + 1).fill(0);

for (const num of X) {
  count[num]++;
}

console.log(Math.max(...count));