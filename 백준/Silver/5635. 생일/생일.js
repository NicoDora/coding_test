const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const n = Number(input[0]);
const array = [];

for (let i = 1; i <= n; i++) {
  array.push(input[i].split(" "));
}

const sorted = array.sort((a, b) => a[3] - b[3] || a[2] - b[2] || a[1] - b[1]);

console.log(sorted[n - 1][0] + "\n" + sorted[0][0]);