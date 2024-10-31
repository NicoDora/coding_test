const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

let N = Number(input);

for (let i = 2; i * i <= N; ) {
  if (N % i === 0) {
    console.log(i);
    N = N / i;
  } else {
    i++;
  }
}

if (N !== 1) console.log(N);