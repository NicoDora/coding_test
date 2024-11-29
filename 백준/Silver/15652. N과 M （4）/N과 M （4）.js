const fs = require("fs");
const [N, M] = fs.readFileSync(0, "utf-8").toString().trim().split(" ").map(Number);

function dfs(depth, start) {
  if (depth === M) {
    result.push(array.join(" "));
    array.pop();
    return;
  }

  for (let i = start; i <= N; i++) {
    array.push(i);
    dfs(depth + 1, i);
  }
    
  array.pop();
}

const result = [];
let array = [];

dfs(0, 1);

console.log(result.join("\n"));