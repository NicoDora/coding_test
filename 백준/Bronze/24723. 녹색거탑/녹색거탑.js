const fs = require("fs");
const input = Number(fs.readFileSync("/dev/stdin").toString().trim());

console.log(2 ** input);