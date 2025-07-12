const fs = require("fs");
const [N, L] = fs.readFileSync(0, "utf-8").toString().trim().split(" ").map(Number);

let count = 0;
let i = 1;

while (true) {
  if (!String(i).includes(String(L))) {
    count++;

    if (count === N) {
      console.log(i);
      break;
    }
  }

  i++;
}