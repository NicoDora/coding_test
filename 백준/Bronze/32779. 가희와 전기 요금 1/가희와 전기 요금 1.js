const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const Q = Number(input[0]);
const result = [];

for (let i = 1; i <= Q; i++) {
  const [a, m] = input[i].split(" ").map(Number);
  result.push(Math.floor((a * m * 1.76) / 1000));
}

console.log(result.join("\n"));