const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const testCase = Number(input[0]);

for (let i = 1; i <= testCase; i++) {
  const string = input[i];
  console.log(`${string[0]}${string[string.length - 1]}`);
}