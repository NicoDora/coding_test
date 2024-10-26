const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const words = input.split(" ");
const result = words[0] === "" ? 0 : words.length;

console.log(result);