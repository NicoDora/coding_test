const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const prime = input[1].split(" ").map(Number);

console.log(Math.max(...prime) * Math.min(...prime));