const fs = require("fs");
const N = BigInt(fs.readFileSync(0, "utf-8").toString().trim());

console.log(String(N % 20000303n));