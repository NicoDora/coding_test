const fs = require("fs");
const n = Number(fs.readFileSync(0, "utf-8").toString().trim());

const array = new Array(n).fill(0);

array[0] = 1;
array[1] = 1;

for (let i = 2; i <= n; i++) {
  array[i] = (array[i - 1] + array[i - 2]) % 10007;
}

console.log(array[n]);