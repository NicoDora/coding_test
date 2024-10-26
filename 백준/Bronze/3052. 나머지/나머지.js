const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

console.log(new Set(input.map((e) => Number(e) % 42)).size);