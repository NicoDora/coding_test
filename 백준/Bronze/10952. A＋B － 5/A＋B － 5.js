const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const result = [];
let index = 0;

while (true) {
  const [a, b] = input[index++].split(" ").map(Number);

  if (a === 0 && b === 0) break;
  result.push(a + b);
}

console.log(result.join("\n"));