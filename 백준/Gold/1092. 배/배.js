const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const N = Number(input[0]);
const crane = input[1].split(" ").map(Number);
const box = input[3].split(" ").map(Number);
let time = 0;

crane.sort((a, b) => b - a);
box.sort((a, b) => b - a);

if (crane[0] < box[0]) time = -1;
else {
  while (box.length) {
    let index = 0;

    for (let i = 0; i < N; i++) {
      while (index < box.length) {
        if (crane[i] >= box[index]) {
          box.splice(index, 1);
          break;
        } else index++;
      }
    }
    time++;
  }
}

console.log(time);