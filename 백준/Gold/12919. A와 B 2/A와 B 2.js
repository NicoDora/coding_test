const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

function dfs(t) {
  if (S === t) {
    result = 1;
    return;
  }

  if (!t.length) return;
  if (t[t.length - 1] === "A") dfs(t.slice(0, t.length - 1));
  if (t[0] === "B") dfs([...t.slice(1)].reverse().join(""));
}

const S = input[0];
const T = input[1];
let result = 0;

dfs(T);

console.log(result);