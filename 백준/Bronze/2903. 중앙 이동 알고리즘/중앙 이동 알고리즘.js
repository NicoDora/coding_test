const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

let beforeSquareDotCount = 4;

for (let i = 0; i < Number(input); i++) {
  const beforeSquareSideDotCount = Math.sqrt(beforeSquareDotCount);
  const beforeDuplicateDotCount = beforeSquareSideDotCount * 4 - 3;
  beforeSquareDotCount = beforeSquareDotCount * 4 - beforeDuplicateDotCount - 2;
}

console.log(beforeSquareDotCount);