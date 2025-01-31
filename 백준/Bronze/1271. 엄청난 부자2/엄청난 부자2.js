const fs = require("fs");
const [n, m] = fs.readFileSync(0, "utf-8").toString().trim().split(" ").map(BigInt);

console.log(String(n / m) + "\n" + String(n % m));