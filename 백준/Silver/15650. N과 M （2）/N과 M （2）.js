const fs = require("fs");
const [N, M] = fs.readFileSync(0, "utf-8").toString().trim().split(" ").map(Number);

function dfs(depth, start) {
  if (depth === M) {
    result.push(array.join(" "));
    return;
  }

  for (let i = start; i <= N; i++) {
    if (!visited[i]) {
      visited[i] = true;
      array.push(i);
      dfs(depth + 1, i + 1);
      visited[i] = false;
      array.pop();
    }
  }
}

const visited = [];
const result = [];
const array = [];

dfs(0, 1);
console.log(result.join("\n"));