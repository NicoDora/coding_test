const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const N = Number(input[0]);
const result = [];

for (let i = 1; i <= N; i++) {
  const [A, B] = input[i].split(" ");

  const sortedA = A.split("").sort().join("");
  const sortedB = B.split("").sort().join("");

  sortedA === sortedB
    ? result.push(`${A} & ${B} are anagrams.`)
    : result.push(`${A} & ${B} are NOT anagrams.`);
}

console.log(result.join("\n"));