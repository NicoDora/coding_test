const fs = require("fs");
const [N, M, K] = fs.readFileSync(0, "utf-8").toString().trim().split(" ").map(Number);

const result = [];

if (N + M - 1 <= K) {
  result.push("YES");

  for (let i = 0; i < N; i++) {
    let temp = "";

    for (let j = 0; j < M; j++) {
      temp += 1 + i + j + " ";
    }

    result.push(temp);
  }
} else {
  result.push("NO");
}

console.log(result.join("\n"));