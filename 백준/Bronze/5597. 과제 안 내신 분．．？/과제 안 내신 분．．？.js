const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

const allStudents = Array.from({ length: 30 }, (_, i) => i + 1);
const notSubmitted = allStudents.filter((e) => !input.includes(e)).join("\n");

console.log(notSubmitted);