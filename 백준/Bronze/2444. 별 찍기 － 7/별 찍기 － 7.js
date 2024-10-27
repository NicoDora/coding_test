const fs = require("fs");
input = fs.readFileSync("/dev/stdin").toString().trim();

const N = Number(input);
let result = "";

for (let i = 1; i <= N; i++) {
  result += " ".repeat(N - i) + "*".repeat(2 * i - 1) + "\n";
}

for (let i = N - 1; i >= 1; i--) {
  result += " ".repeat(N - i) + "*".repeat(2 * i - 1) + "\n";
}

console.log(result);