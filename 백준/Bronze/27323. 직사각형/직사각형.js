const fs = require("fs");
const [a, b] = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number); // 문제 제출 시

console.log(a * b);