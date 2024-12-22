const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const result = [];

for (let i = 0; i < input.length; i++) {
  const [N, B, M] = input[i].split(" ").map(Number);
  let money = N;
  let year = 0;

  while (money < M) {
    money += money * (B / 100);
    year++;
  }

  result.push(year);
}

console.log(result.join("\n"));