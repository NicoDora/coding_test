const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const X = input[1].split(" ").map(Number);
const count = [];

for (let i = 1; i <= M; i++) {
  count.push(X.filter((e) => e === i).length);
}

console.log(Math.max(...count));