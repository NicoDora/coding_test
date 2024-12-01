const fs = require("fs");
let [n1, n2] = fs.readFileSync(0, "utf-8").toString().trim().split(" ").map(Number);

function getPosition(num) {
  const row = Math.floor((num - 1) / 4);
  const col = (num - 1) % 4;
  return { row, col };
}

const { row: row1, col: col1 } = getPosition(n1);
const { row: row2, col: col2 } = getPosition(n2);

console.log(Math.abs(row1 - row2) + Math.abs(col1 - col2));