const fs = require("fs");
const [x, y, w, h] = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

const distance = [x, y];

distance.push(Math.abs(x - w));
distance.push(Math.abs(y - h));

const result = Math.min(...distance);

console.log(result);