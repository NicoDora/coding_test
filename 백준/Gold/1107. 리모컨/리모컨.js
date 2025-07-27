const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const N = Number(input[0]);
const M = Number(input[1]);

if (M === 0) console.log(Math.min(String(N).length, Math.abs(N - 100)));
else {
  const brokenButton = input[2].split(" ");
  const regex = new RegExp(`[${brokenButton.join("")}]`);
  let min = Math.abs(N - 100);

  for (let i = 0; i < 1000000; i++) {
    if (regex.test(i)) continue;

    min = Math.min(min, String(i).length + Math.abs(i - N));
  }

  console.log(min);
}