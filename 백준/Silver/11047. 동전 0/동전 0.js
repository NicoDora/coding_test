const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const [N, K] = input[0].split(" ");
const coins = [];
let current = Number(K);
let count = 0;

for (let i = 1; i <= N; i++) {
  coins.push(Number(input[i]));
}

for (let i = N - 1; i >= 0; i--) {
  const change = Math.floor(current / coins[i]);
  if (change) {
    current -= coins[i] * change;
    count += change;
  }
}

console.log(count);