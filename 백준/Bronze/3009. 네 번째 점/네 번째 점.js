const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let x = {},
  y = {};

for (i of input) {
  let line = i.split(" ");
  x[line[0]] = x[line[0]] ? x[line[0]] + 1 : 1;
  y[line[1]] = y[line[1]] ? y[line[1]] + 1 : 1;
}

const [resultX, resultY] = [
  Object.keys(x).find((key) => x[key] === 1),
  Object.keys(y).find((key) => y[key] === 1),
];

console.log(resultX, resultY);