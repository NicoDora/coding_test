const fs = require("fs");
const N = Number(fs.readFileSync(0, "utf-8").toString().trim());

const result = [];

for (let i = 0; i < N; i++) {
  result.push("@".repeat(N * 5));
}

for (let i = 0; i < N * 3; i++) {
  result.push("@".repeat(N));
}

for (let i = 0; i < N; i++) {
  result.push("@".repeat(N * 5));
}

console.log(result.join("\n"));