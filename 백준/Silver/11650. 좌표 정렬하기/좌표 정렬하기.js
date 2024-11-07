const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input.shift();
const numbers = input.map((line) => line.split(" ").map(Number));
let result = "";

numbers.sort((a, b) => {
  return a[0] === b[0] ? a[1] - b[1] : a[0] - b[0];
});

for (let i = 0; i < numbers.length; i++) {
  result += `${numbers[i][0]} ${numbers[i][1]}\n`;
}

console.log(result);