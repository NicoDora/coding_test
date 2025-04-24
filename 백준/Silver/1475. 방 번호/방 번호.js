const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("").map(Number);

const count = Array(10).fill(0);

for (const n of input) {
  count[n]++;
}

count[6] = Math.ceil((count[6] + count[9]) / 2);
count[9] = 0;

console.log(Math.max(...count));