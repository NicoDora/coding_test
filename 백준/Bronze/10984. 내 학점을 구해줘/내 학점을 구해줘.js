const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const T = Number(input[0]);
const result = [];
let index = 1;

for (let i = 1; i <= T; i++) {
  const N = Number(input[index]);
  const arrayC = [];
  const arrayG = [];

  for (let j = index + 1; j <= index + N; j++) {
    const [C, G] = input[j].split(" ").map(Number);
    arrayC.push(C);
    arrayG.push(G);
  }

  const grade = arrayC.reduce((p, c) => p + c);

  let sum = 0;
  for (let k = 0; k < N; k++) {
    sum += arrayC[k] * arrayG[k];
  }

  const avg = (sum / grade).toFixed(1);

  result.push(`${grade} ${avg}`);

  index += N + 1;
}

console.log(result.join("\n"));