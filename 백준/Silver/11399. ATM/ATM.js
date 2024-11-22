const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const array = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
let currentTime = 0;
let result = 0;

for (time of array) {
  result += currentTime += time;
}

console.log(result);