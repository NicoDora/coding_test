const fs = require("fs");
const [A, B, C] = fs.readFileSync(0, "utf-8").toString().trim().split(" ").map(BigInt);

function mod(A, B, C) {
  if (B === 0n) return 1n;
  if (B === 1n) return A % C;

  let half = mod(A, B / 2n, C);

  if (B % 2n === 0n) return (half * half) % C;
  else return (((half * half) % C) * A) % C;
}

console.log(String(mod(A, B, C)));