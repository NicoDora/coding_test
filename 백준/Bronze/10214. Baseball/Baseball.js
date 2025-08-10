const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const T = Number(input[0]);
const result = [];
let index = 1;

for (let t = 0; t < T; t++) {
  let yonsei = 0;
  let korea = 0;

  for (let i = 0; i < 9; i++) {
    const [y, k] = input[index++].split(" ").map(Number);

    yonsei += y;
    korea += k;
  }

  result.push(yonsei > korea ? "Yonsei" : yonsei < korea ? "Korea" : "Draw");
}

console.log(result.join("\n"));