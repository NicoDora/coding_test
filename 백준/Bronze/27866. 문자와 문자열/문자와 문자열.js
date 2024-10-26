const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const string = input[0];
const index = Number(input[1]) - 1;
const result = string.charAt(index);

console.log(result);