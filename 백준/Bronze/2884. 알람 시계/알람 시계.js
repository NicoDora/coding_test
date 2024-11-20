const fs = require("fs");
let [h, m] = fs.readFileSync(0, "utf-8").toString().trim().split(" ").map(Number);

let subMinute = m - 45;
let subHour = h;

if (subMinute < 0) {
  subHour = h - 1;
  if (subHour < 0) {
    subHour += 24;
  }
  subMinute += 60;
}

console.log(subHour, subMinute);