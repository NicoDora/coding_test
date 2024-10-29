const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" "); // 문제 제출 시

console.log(Number(input[0]).toString(input[1]).toUpperCase());