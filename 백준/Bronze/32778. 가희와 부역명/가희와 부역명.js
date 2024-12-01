const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split(/(\(|\))/);

console.log(input[0] + "\n" + (input[2] || "-"));