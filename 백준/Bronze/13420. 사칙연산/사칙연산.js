const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const T = Number(input[0]);
const result = [];

for (let i = 1; i <= T; i++) {
  const [n1, op, n2, _, res] = input[i]
    .split(" ")
    .map((n, i) => (i !== 1 && i !== 3 ? BigInt(n) : n));

  if (op === "+") result.push(n1 + n2 === res ? "correct" : "wrong answer");
  else if (op === "-")
    result.push(n1 - n2 === res ? "correct" : "wrong answer");
  else if (op === "*")
    result.push(n1 * n2 === res ? "correct" : "wrong answer");
  else if (op === "/")
    result.push(n1 / n2 === res ? "correct" : "wrong answer");
}

console.log(result.join("\n"));