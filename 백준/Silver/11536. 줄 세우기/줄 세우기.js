const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const N = Number(input[0]);
const names = input.slice(1);
const asc = [...names].sort();
const desc = [...names].sort().reverse();

function arraysEqual(a, b) {
  return a.every((v, i) => v === b[i]);
}

if (arraysEqual(names, asc)) console.log("INCREASING");
else if (arraysEqual(names, desc)) console.log("DECREASING");
else console.log("NEITHER");
