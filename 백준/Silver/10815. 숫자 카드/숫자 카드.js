const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const M = Number(input[2]);
const myNumbers = new Set(input[1].split(" "));
const reqNumbers = input[3].split(" ");

let result = "";

for (let i = 0; i < M; i++) {
  result += myNumbers.has(reqNumbers[i]) ? "1 " : "0 ";
}

console.log(result);