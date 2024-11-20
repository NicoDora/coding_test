const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const burgers = [input[0], input[1], input[2]];
const drinks = [input[3], input[4]];

console.log(
  Math.min(...burgers.map(Number)) + Math.min(...drinks.map(Number)) - 50
);