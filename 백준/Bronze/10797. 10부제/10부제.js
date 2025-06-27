const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const day = Number(input[0]);
const cars = input[1].split(" ").map(Number);
let count = 0;

cars.map((num) => {
  if (num === day) count++;
});

console.log(count);