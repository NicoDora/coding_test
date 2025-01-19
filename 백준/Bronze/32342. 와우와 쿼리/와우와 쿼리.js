const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const Q = Number(input[0]);
const query = input.slice(1);
const result = [];

for (let i = 0; i < Q; i++) {
  let count = 0;

  for (let j = 0; j < query[i].length - 2; j++) {
    if (
      query[i][j] === "W" &&
      query[i][j + 1] === "O" &&
      query[i][j + 2] === "W"
    ) {
      count++;
    }
  }

  result.push(count);
}

console.log(result.join("\n"));