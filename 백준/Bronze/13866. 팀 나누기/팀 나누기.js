const fs = require("fs");
const [A, B, C, D] = fs.readFileSync(0, "utf-8").toString().trim().split(" ").map(Number);
const diff1 = Math.abs(A + B - (C + D));
const diff2 = Math.abs(A + C - (B + D));
const diff3 = Math.abs(A + D - (B + C));

console.log(Math.min(diff1, diff2, diff3));