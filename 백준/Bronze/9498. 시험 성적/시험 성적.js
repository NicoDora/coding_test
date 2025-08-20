const fs = require("fs");
const score = Number(fs.readFileSync(0, "utf-8").toString().trim());

console.log(
  score >= 90
    ? "A"
    : score >= 80
    ? "B"
    : score >= 70
    ? "C"
    : score >= 60
    ? "D"
    : "F"
);