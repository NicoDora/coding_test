const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const array = input.map(Number);
const maxNum = Math.max(...array);
const maxNumIndex = array.indexOf(maxNum) + 1;

console.log(`${maxNum}\n${maxNumIndex}`);