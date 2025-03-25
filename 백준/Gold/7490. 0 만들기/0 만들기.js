const fs = require("fs");
const [T, ...N] = fs.readFileSync(0, "utf-8").toString().trim().split("\n").map(Number);

function dfs(n, depth, temp, calc, before) {
  if (n === depth) {
    if (calc === 0) result.push(temp);
    return;
  }

  // ' ' 연산
  let newBefore =
    before >= 0 ? before * 10 + (depth + 1) : before * 10 - (depth + 1);
  let newCalc = calc - before + newBefore;
  dfs(n, depth + 1, temp + " " + (depth + 1), newCalc, newBefore);

  // '+' 연산
  dfs(n, depth + 1, temp + "+" + (depth + 1), calc + (depth + 1), depth + 1);

  // '-' 연산
  dfs(n, depth + 1, temp + "-" + (depth + 1), calc - (depth + 1), -(depth + 1));
}

const result = [];

for (let i = 0; i < T; i++) {
  dfs(N[i], 1, "1", 1, 1);
  result.push("");
}

console.log(result.join("\n"));