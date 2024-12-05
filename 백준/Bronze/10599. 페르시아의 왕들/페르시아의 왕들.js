const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const result = [];

for (let i = 0; i < input.length - 1; i++) {
  const [a, b, c, d] = input[i].split(" ").map(Number);
  result.push(c - b + " " + (d - a));
}

console.log(result.join("\n"));