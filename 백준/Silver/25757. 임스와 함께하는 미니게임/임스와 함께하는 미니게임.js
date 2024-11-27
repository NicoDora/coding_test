const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const [N, game] = input[0].split(" ");
const player = new Set();
let result = 0;

for (let i = 1; i <= Number(N); i++) {
  player.add(input[i]);
}

switch (game) {
  case "Y":
    result = player.size;
    break;
  case "F":
    result = Math.floor(player.size / 2);
    break;
  case "O":
    result = Math.floor(player.size / 3);
    break;
}

console.log(result);