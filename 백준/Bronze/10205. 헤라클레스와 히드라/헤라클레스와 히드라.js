const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const K = Number(input[0]);
let result = "";
let index = 1;

for (let i = 1; i <= K; i++) {
  let heads = Number(input[index]);
  const actions = input[index + 1];

  for (const action of actions) {
    if (action === "c") heads++;
    else if (action === "b") heads--;
    if (heads <= 0) {
      heads = 0;
      break;
    }
  }
  index += 2;

  result += `Data Set ${i}:\n${heads}\n\n`;
}

console.log(result);