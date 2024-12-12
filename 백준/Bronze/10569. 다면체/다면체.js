const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const T = Number(input[0]);
const result = [];

for (let i = 1; i <= T; i++) {
  const [V, E] = input[i].split(" ").map(Number);
  result.push(E - V + 2);
}

console.log(result.join("\n"));