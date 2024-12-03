const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

function dfs(depth) {
  if (depth === M) {
    result.push(array.join(" "));
    return;
  }

  for (let i = 0; i < N; i++) {
    if (!visited[i]) {
      visited[i] = true;
      array.push(nums[i]);
      dfs(depth + 1);
      visited[i] = false;
      array.pop();
    }
  }
}

const [N, M] = input[0].split(" ").map(Number);
const nums = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
const array = [];
const visited = [];
const result = [];

dfs(0);
console.log(result.join("\n"));