const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const N = Number(input[0]);
const words = input.slice(1).map((row) => row.split(""));
const map = new Map();
let num = 9;

for (let i = 0; i < N; i++) {
  words[i].reverse();

  for (let j = 0; j < words[i].length; j++) {
    const alphabet = words[i][j];
    map.set(alphabet, (map.get(alphabet) || 0) + 10 ** j);
  }
}

const charToDigitMap = new Map(
  [...map].sort((a, b) => b[1] - a[1]).map((row) => [row[0], num--])
);

for (let i = 0; i < N; i++) {
  words[i].reverse();

  for (let j = 0; j < words[i].length; j++) {
    words[i][j] = charToDigitMap.get(words[i][j]);
  }

  words[i] = Number(words[i].join(""));
}

console.log(words.reduce((sum, n) => (sum += n)));