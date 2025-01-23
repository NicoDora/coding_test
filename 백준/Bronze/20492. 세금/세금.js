const fs = require("fs");
const input = Number(fs.readFileSync(0, "utf-8").toString().trim());

console.log(
  Math.floor(input * (1 - 0.22)),
  Math.floor(input * 0.8 + input * 0.2 * (1 - 0.22))
);