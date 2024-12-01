const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n").map(Number);

console.log(input[0] > input[1] ? "flight" : "high speed rail");