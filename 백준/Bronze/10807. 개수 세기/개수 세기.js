const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const count = Number(input[0]);
const numbers = input[1].split(" ").map(Number);
const wantNumber = Number(input[2]);

const result = numbers.filter((e) => wantNumber === e).length;

console.log(result);