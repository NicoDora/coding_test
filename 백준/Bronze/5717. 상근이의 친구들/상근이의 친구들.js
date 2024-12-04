const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const result = [];

for (friends of input) {
  const [M, F] = friends.split(" ").map(Number);
  result.push(M + F);
}

result.pop();

console.log(result.join("\n"));