const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim();

console.log(input.toUpperCase().split("D2").length > 1 ? "D2" : "unrated");