const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const x = [],
  y = [];

for (let i = 1; i <= Number(input[0]); i++) {
  x.push(Number(input[i].split(" ")[0]));
  y.push(Number(input[i].split(" ")[1]));
}

const width = Math.max(...x) - Math.min(...x);
const height = Math.max(...y) - Math.min(...y);

console.log(width * height);