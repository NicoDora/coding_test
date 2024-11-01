const fs = require("fs");
const [x, y, w, h] = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

const result = Math.min(x, y, w - x, h - y);

console.log(result);