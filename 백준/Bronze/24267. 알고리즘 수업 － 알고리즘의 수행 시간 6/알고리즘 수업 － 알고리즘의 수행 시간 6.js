const fs = require("fs");
const input = BigInt(fs.readFileSync("/dev/stdin").toString().trim());

console.log(`${(input * (input - 1n) * (input - 2n)) / 6n}\n3`);