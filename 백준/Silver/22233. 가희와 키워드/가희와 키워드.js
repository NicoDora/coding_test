const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const keyword = new Set(input.slice(1, N + 1));
const result = [];
let count = N;

for (let i = N + 1; i <= N + M; i++) {
  const writing = input[i].split(",");

  for (const word of writing) {
    if (keyword.has(word)) {
      keyword.delete(word);
      count--;
    }
  }

  result.push(count);
}

console.log(result.join("\n"));