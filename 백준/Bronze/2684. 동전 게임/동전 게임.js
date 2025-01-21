const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const P = Number(input[0]);
const countCase = ["TTT", "TTH", "THT", "THH", "HTT", "HTH", "HHT", "HHH"];
const result = Array.from({ length: P + 1 }, () => Array(8).fill(0));

for (let i = 1; i <= P; i++) {
  const row = input[i];

  for (let j = 0; j < 48; j++) {
    const sequence = row[j] + row[j + 1] + row[j + 2];
    const index = countCase.indexOf(sequence);

    if (index !== -1) result[i][countCase.indexOf(sequence)]++;
  }
}

console.log(
  result
    .slice(1)
    .map((row) => row.join(" "))
    .join("\n")
);