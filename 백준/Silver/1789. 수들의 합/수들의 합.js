const fs = require("fs");
const input = Number(fs.readFileSync(0, "utf-8").toString().trim().split("\n"));

let i = 1;
let sum = 0;

while (sum < input) {
  sum += i++;
}

console.log(sum === input ? i - 1 : i - 2);