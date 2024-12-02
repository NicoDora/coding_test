const fs = require("fs");
const N = Number(fs.readFileSync(0, "utf-8").toString().trim());

const result = [];

for (let i = 1; i <= N; i++) {
  const space = " ".repeat(N - i);
  if (i === 1) {
    result.push(space + "*");
  } else if (i === N) {
    result.push("*".repeat(N * 2 - 1));
  } else {
    result.push(space + "*" + " ".repeat(2 * (i - 1) - 1) + "*");
  }
}

console.log(result.join("\n"));