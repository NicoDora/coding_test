const fs = require("fs");
const [n, m, k] = fs.readFileSync(0, "utf-8").toString().trim().split(" ").map(Number);

console.log(m * k + m);