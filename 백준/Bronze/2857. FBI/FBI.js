const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const result = [];

for (let i = 0; i < input.length; i++) {
  if (input[i].includes("FBI")) result.push(i + 1);
}

console.log(result.length ? result.join(" ") : "HE GOT AWAY!");