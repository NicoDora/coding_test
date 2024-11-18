const fs = require("fs");
const X = Number(fs.readFileSync(0, "utf-8").toString().trim());

function bottomUp(X) {
  const memo = new Array(X + 1).fill(0);

  for (let i = 2; i <= X; i++) {
    memo[i] = memo[i - 1] + 1;
    if (i % 2 === 0) memo[i] = Math.min(memo[i], memo[i / 2] + 1);
    if (i % 3 === 0) memo[i] = Math.min(memo[i], memo[i / 3] + 1);
  }

  return memo[X];
}

console.log(bottomUp(X));