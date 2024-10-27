const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const reverseInput = input.split("").reverse().join("");
const result = input === reverseInput ? 1 : 0;

console.log(result);