const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const [attackA, healthA] = input[0].split(" ").map(Number);
const [attackB, healthB] = input[1].split(" ").map(Number);

const turnA = Math.ceil(healthA / attackB);
const turnB = Math.ceil(healthB / attackA);

if (turnA > turnB) console.log("PLAYER A");
else if (turnA < turnB) console.log("PLAYER B");
else console.log("DRAW");