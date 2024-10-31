const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

let N = Number(input);

if (N === 2) console.log(2);
if (N === 3) console.log(3);

for (let i = 2; i * i <= N; ) {
  while (N !== 1) {
    if (N % i === 0) {
      console.log(i);
      N = N / i;
    } else {
      i++;
    }
  }
}