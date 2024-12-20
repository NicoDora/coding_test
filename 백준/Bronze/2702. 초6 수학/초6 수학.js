const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

function euclidean(a, b) {
  c = a % b;
  if (c === 0) return b;
  return euclidean(b, c);
}

const T = Number(input[0]);
const result = [];

for (let i = 1; i <= T; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  const gcd = euclidean(a, b);
  const lcm = (a * b) / gcd;

  result.push(`${lcm} ${gcd}`);
}

console.log(result.join("\n"));