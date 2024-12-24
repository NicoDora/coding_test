const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const A = input[1].split(" ").map(Number);
const B = input[2].split(" ").map(Number);
const setB = new Set([...B]);

const difference = A.filter((e) => !setB.has(e)).sort((a, b) => a - b);
const differenceLength = difference.length;

console.log(
  differenceLength ? `${differenceLength}\n${difference.join(" ")}` : 0
);