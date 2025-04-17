const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

function arraysEqual(a, b) {
  return a.every((v, i) => v === b[i]);
}

const names = input.slice(1);
const asc = [...names].sort();
const desc = [...names].sort().reverse();

console.log(
  arraysEqual(names, asc)
    ? "INCREASING"
    : arraysEqual(names, desc)
    ? "DECREASING"
    : "NEITHER"
);