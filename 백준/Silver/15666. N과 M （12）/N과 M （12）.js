const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

function dfs(depth, start) {
  if (depth === M) {
    result.push(array.join(" "));
    return;
  }

  let before = 0;
  for (let i = start; i < N; i++) {
    if (before !== nums[i]) {
      array.push(nums[i]);
      dfs(depth + 1, i);
      array.pop();
      before = nums[i];
    }
  }
}

const [N, M] = input[0].split(" ").map(Number);
const nums = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
const array = [];
const result = [];

dfs(0, 0);

console.log(result.join("\n"));