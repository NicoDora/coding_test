const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const prime = input[1].split(" ").map(Number);

if (prime.length === 1) console.log(prime[0] ** 2);
else console.log(Math.max(...prime) * Math.min(...prime));