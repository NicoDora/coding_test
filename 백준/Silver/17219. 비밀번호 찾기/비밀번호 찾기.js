const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const map = new Map();
const result = [];

for (let i = 1; i <= N; i++) {
  const [site, pw] = input[i].split(" ");
  map.set(site, pw);
}

for (let i = N + 1; i <= M + N; i++) {
  result.push(map.get(input[i]));
}

console.log(result.join("\n"));