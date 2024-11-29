const fs = require("fs");
const [N, M] = fs.readFileSync(0, "utf-8").toString().trim().split(" ").map(Number);

function dfs(depth, array) {
  if (depth === M) {
    result.push(array.join(" "));
    return;
  }

  for (let i = 1; i <= N; i++) {
    if (!array.includes(i)) {
      dfs(depth + 1, [...array, i]);
    }
  }
}

const result = [];

dfs(0, []);
console.log(result.join("\n"));