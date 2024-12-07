const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const preferences = input.slice(1, n + 1).map((line) => line.split(" "));
const queries = input.slice(n + 1).map((line) => line.split(" "));
const result = [];

for (const query of queries) {
  let count = 0;

  for (const preference of preferences) {
    let match = true;

    for (let i = 0; i < 3; i++) {
      if (query[i] !== "-" && query[i] !== preference[i]) {
        match = false;
        break;
      }
    }
    if (match) count++;
  }
  result.push(count);
}

console.log(result.join("\n"));