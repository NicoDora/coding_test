const fs = require("fs");
const [n, ...opinion] = fs.readFileSync(0, "utf-8").toString().trim().split("\n").map(Number);

if (n === 0) console.log(0);
else {
  opinion.sort((a, b) => a - b);

  const cut = Math.round(n * 0.15);
  const cutOpinion = opinion.slice(cut, n - cut);
  let sum = 0;

  for (let i = 0; i < cutOpinion.length; i++) {
    sum += cutOpinion[i];
  }

  console.log(Math.round(sum / cutOpinion.length));
}