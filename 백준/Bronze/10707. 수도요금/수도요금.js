const fs = require("fs");
const [A, B, min, plus, P] = fs.readFileSync(0, "utf-8").toString().trim().split("\n").map(Number);

const X = A * P;
let Y = P - min > 0 ? (P - min) * plus + B : B;

if (X > Y) console.log(Y);
else console.log(X);