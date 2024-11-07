const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input.shift();
const numbers = input.map((line) => line.split(" ").map(Number));

numbers.sort((a, b) => {
  return a[0] === b[0] ? a[1] - b[1] : a[0] - b[0];
});

numbers.forEach((e) => console.log(e.join(" ")));