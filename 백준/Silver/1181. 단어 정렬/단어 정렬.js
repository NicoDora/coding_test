const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input.shift();
let result = "";
const words = input
  .sort((a, b) => a.length - b.length || a.localeCompare(b))
  .filter((word, index, array) => index === 0 || word !== array[index - 1]);

for (let i = 0; i < words.length; i++) {
  result += `${words[i]}\n`;
}

console.log(result);