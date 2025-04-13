const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const set = [...new Set(input.join(" ").split(" "))];
const result = [];

for (let i = 0; i < set.length; i++) {
  for (let j = 0; j < set.length; j++) {
    result.push([set[i], set[j]]);
  }
}

console.log(
  result
    .sort((a, b) => a[0].localeCompare(b[0]) || a[1].localeCompare(b[1]))
    .map((row) => row.join(" "))
    .join("\n")
);