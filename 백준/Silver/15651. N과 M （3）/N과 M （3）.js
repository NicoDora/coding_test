const fs = require("fs");
const [N, M] = fs.readFileSync(0, "utf-8").toString().trim().split(" ").map(Number);

function dfs(depth) {
  if (depth === M) {
    result.push(array.join(" "));
    return;
  }

  for (let i = 1; i <= N; i++) {
    array.push(i);
    dfs(depth + 1);
    array.pop();
  }
}

const array = [];
const result = [];

dfs(0);
console.log(result.join("\n"));