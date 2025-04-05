const fs = require("fs");
const N = Number(fs.readFileSync(0, "utf-8").toString().trim());

const result = [];

for (let i = 1; i <= 9; i++) {
  result.push(`${N} * ${i} = ${N * i}`);
}

console.log(result.join("\n"));