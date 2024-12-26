const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const S = Number(input[1]);
const map = new Map();
const resultSet = new Set();
const formSet = new Set();

for (let m = 2; m < M + 2; m++) {
  const [i, t] = input[m].split(" ").map(Number);

  if (t) {
    if (!formSet.has(i)) map.set(i, 0);
  } else {
    formSet.add(i);
    map.delete(i);

    map.forEach((value, key) => {
      if (key !== i) {
        const updatedValue = value + 1;
        map.set(key, updatedValue);

        if (updatedValue >= S) resultSet.add(key);
      }
    });
  }
}

const result = [...resultSet].sort((a, b) => a - b);

console.log(result.length ? result.join("\n") : -1);