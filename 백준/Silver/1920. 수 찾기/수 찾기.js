const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const set = new Set(input[1].split(" "));
const nums = input[3].split(" ");
const result = [];

for (const num of nums) {
  result.push(set.has(num) ? 1 : 0);
}

console.log(result.join("\n"));