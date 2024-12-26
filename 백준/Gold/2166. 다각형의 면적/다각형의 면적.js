const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const N = Number(input[0]);
const arrayX = [];
const arrayY = [];
let line1 = 0;
let line2 = 0;

for (let i = 1; i <= N; i++) {
  const [x, y] = input[i].split(" ").map(Number);

  arrayX.push(x);
  arrayY.push(y);
}

arrayX.push(arrayX[0]);
arrayY.push(arrayY[0]);

for (let i = 0; i < N; i++) {
  line1 += arrayX[i] * arrayY[i + 1];
  line2 += arrayY[i] * arrayX[i + 1];
}

console.log((Math.abs(line1 - line2) / 2).toFixed(1));