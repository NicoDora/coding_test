const fs = require("fs");
const N = Number(fs.readFileSync(0, "utf-8").toString().trim());

const result = [];
let star = "";

for (let i = 0; i < N; i++) {
  result.push((star += "*"));
}

console.log(result.join("\n"));