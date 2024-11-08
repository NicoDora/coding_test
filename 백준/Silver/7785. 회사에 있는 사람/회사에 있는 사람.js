const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input.shift());
const set = new Set();

for (let i = 0; i < n; i++) {
  const [name, status] = input[i].split(" ");
  status === "enter" ? set.add(name) : set.delete(name);
}

console.log([...set].sort((a, b) => (a < b ? 1 : -1)).join("\n"));