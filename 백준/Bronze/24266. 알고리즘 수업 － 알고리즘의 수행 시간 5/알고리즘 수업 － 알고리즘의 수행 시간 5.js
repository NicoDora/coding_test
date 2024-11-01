const fs = require("fs");
const input = BigInt(fs.readFileSync("/dev/stdin").toString().trim());

console.log(`${input ** 3n}\n3`);