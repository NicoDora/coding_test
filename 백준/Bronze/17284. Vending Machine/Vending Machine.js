const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split(" ").map(Number);

let sum = 0;

for (const n of input) {
  if (n === 1) sum += 500;
  else if (n === 2) sum += 800;
  else sum += 1000;
}

console.log(5000 - sum);