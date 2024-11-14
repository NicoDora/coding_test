const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function sort() {
  const map = new Map();
  const array = [];

  for (let i = 0; i < overM.length; i++) {
    const key = overM[i];
    const value = map.get(key);
    if (value) map.set(key, value + 1);
    else map.set(key, 1);
  }

  for (let [num, freq] of map.entries()) {
    array.push([num, freq]);
  }

  return array
    .sort((a, b) => {
      if (a[1] !== b[1]) return b[1] - a[1];
      else if (a[0].length !== b[0].length) return b[0].length - a[0].length;
      return a[0].localeCompare(b[0]);
    })
    .map((e) => e[0]);
}

const [N, M] = input.shift().split(" ").map(Number);
const overM = input.filter((e) => e.length >= M);

console.log(sort().join("\n"));