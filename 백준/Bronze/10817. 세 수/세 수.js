const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split(" ").map(Number);

console.log(input.sort((a, b) => b - a)[1]);