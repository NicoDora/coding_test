const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const Sab = Number(input[0]);
const [Ma, Fab, Mb] = input[1].split(" ").map(Number);

console.log(Sab <= Ma + Fab + Mb || Sab <= 240 ? "high speed rail" : "flight");