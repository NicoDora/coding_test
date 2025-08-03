const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

console.log(input[1].slice(-5));