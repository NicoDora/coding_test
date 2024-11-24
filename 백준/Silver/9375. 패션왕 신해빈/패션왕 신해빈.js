const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const T = Number(input[0]);
const result = [];
let index = 1;

for (let t = 0; t < T; t++) {
  const n = Number(input[index++]);
  const map = new Map();

  for (let i = 0; i < n; i++) {
    const kind = input[index++].split(" ")[1];
    map.set(kind, (map.get(kind) || 0) + 1);
  }

  let combinations = 1;

  for (const count of map.values()) {
    combinations *= count + 1;
  }

  result.push(--combinations);
}

console.log(result.join("\n"));