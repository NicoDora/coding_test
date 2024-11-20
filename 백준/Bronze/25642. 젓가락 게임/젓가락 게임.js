const fs = require("fs");
let [A, B] = fs.readFileSync(0, "utf-8").toString().trim().split(" ").map(Number);

let winner = "";

while (true) {
  B += A;
  if (B >= 5) {
    winner = "yt";
    break;
  }

  A += B;
  if (A >= 5) {
    winner = "yj";
    break;
  }
}

console.log(winner);