const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input.shift();
const words = input
  .sort((a, b) => a.length - b.length || a.localeCompare(b))
  .filter((word, index, array) => index === 0 || word !== array[index - 1])
  .join("\n");

console.log(words);