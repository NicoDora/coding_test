const fs = require("fs");
const [S, T] = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const array = T.split("");

while (array.length !== S.length) {
  if (array.pop() === "B") array.reverse();
}

console.log(Number(array.join("") === S));