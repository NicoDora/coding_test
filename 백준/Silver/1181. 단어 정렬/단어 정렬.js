const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input.shift();
[...new Set(input)]
  .sort((a, b) => a.length - b.length || a.localeCompare(b))
  .forEach((word) => console.log(word));