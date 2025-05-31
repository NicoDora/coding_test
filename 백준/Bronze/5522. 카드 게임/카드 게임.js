const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n").map(Number);

let sum = 0;

for (const num of input) {
  sum += num;
}

console.log(sum);