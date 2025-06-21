const fs = require("fs");
const [A, B] = fs.readFileSync(0, "utf-8").toString().trim().split(" ").map(Number);

console.log(Math.min(Math.floor(A / 2), B));