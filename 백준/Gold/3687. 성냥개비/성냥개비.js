const fs = require("fs");
const [T, ...input] = fs.readFileSync(0, "utf-8").toString().trim().split("\n").map(Number);

function isSmaller(a, b) {
  if (Number(a) < Number(b)) return true;
  else return false;
}

function getBiggest(n) {
  let num = "".padEnd(Math.floor(n / 2) - 1, "1");

  if (n % 2) return "7" + num;
  else return "1" + num;
}

const dp = Array(101).fill(null);
const cost = [6, 2, 5, 5, 4, 5, 6, 3, 7, 6];
const result = Array.from({ length: T }, () => [0, 0]);

dp[0] = "";

// i : 성냥개비의 개수
// d : 숫자
for (let i = 1; i <= 100; i++) {
  for (let d = 0; d < 10; d++) {
    const needCount = cost[d];

    if (i - needCount < 0) continue;
    if (dp[i - needCount] === null) continue;

    const temp = dp[i - needCount] + d;

    if ((temp.length > 1 && temp[0] === "0") || temp === "0") continue;

    if (dp[i] === null || isSmaller(temp, dp[i])) dp[i] = temp;
  }
}

for (let i = 0; i < T; i++) {
  result[i] = [dp[input[i]], getBiggest(input[i])];
}

console.log(result.map((row) => row.join(" ")).join("\n"));