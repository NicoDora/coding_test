const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const matches = input[1].match(/pPAp/g);

console.log(matches ? matches.length : 0);