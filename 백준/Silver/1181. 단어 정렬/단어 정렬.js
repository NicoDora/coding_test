const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input.shift();
let result = "";
const words = [...new Set(input)].sort(
  (a, b) => a.length - b.length || a.localeCompare(b)
);

for (let i = 0; i < words.length; i++) {
  result += `${words[i]}\n`;
}

console.log(result);