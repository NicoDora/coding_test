const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const array = input.slice(1).map((line) => line.split(" ").map(Number));
const result = [];
const awarded = new Set();

for (let j = 1; j <= 4; j++) {
  const max = [];

  for (let i = 0; i < array.length; i++) {
    if (!awarded.has(array[i][0])) max.push([array[i][j], array[i][0]]);
  }

  max.sort((a, b) => b[0] - a[0] || a[1] - b[1]);

  result.push(max[0][1]);
  awarded.add(max[0][1]);
}

console.log(result.join(" "));