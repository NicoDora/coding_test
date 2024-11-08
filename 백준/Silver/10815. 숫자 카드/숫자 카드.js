const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const myNumbers = new Set(input[1].split(" ").map(Number));
const reqNumbers = input[3].split(" ").map(Number);

let result = reqNumbers.map((e) => (myNumbers.has(e) ? 1 : 0));

console.log(result.join(" "));