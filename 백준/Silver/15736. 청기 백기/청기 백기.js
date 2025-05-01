const fs = require("fs");
const N = Number(fs.readFileSync(0, "utf-8").toString().trim());

console.log(Math.floor(Math.sqrt(N)));