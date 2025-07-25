const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

function dfs(depth, start) {
  if (depth === L) {
    const string = array.join("");
    const vowelCount = string.match(/[aeiou]/g)?.length || 0;
    const consonantCount = string.length - vowelCount;

    if (vowelCount >= 1 && consonantCount >= 2) result.push(array.join(""));

    return;
  }

  for (let i = start; i < C; i++) {
    if (visited[i]) continue;

    visited[i] = true;
    array.push(map.get(i));
    dfs(depth + 1, i + 1);
    visited[i] = false;
    array.pop();
  }
}

const [L, C] = input[0].split(" ").map(Number);
const alphabet = input[1].split(" ").sort();
const map = new Map();
const visited = Array(C).fill(false);
const result = [];
const array = [];

for (let i = 0; i < C; i++) {
  map.set(i, alphabet[i]);
}

dfs(0, 0);

console.log(result.join("\n"));