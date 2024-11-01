const fs = require("fs");
const input = Number(fs.readFileSync("/dev/stdin").toString().trim());

console.log(`${(input * (input - 1)) / 2}\n2`);