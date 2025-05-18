const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const T = Number(input[0]);
const result = [];
let index = 1;

for (let t = 0; t < T; t++) {
  const N = Number(input[index++]);
  const drink = [];

  for (let n = 0; n < N; n++) {
    const [school, amount] = input[index++].split(" ");
    drink.push([school, Number(amount)]);
  }

  drink.sort((a, b) => b[1] - a[1]);
  result.push(drink[0][0]);
}

console.log(result.join("\n"));