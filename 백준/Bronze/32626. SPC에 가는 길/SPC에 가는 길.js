const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [Sx, Sy] = input[0].split(" ").map(Number);
const [Ex, Ey] = input[1].split(" ").map(Number);
const [Px, Py] = input[2].split(" ").map(Number);

if (Sx === Ex) {
  if (Px === Ex && ((Sy < Py && Py < Ey) || (Ey < Py && Py < Sy)))
    console.log(2);
  else console.log(0);
} else if (Sy === Ey) {
  if (Py === Ey && ((Sx < Px && Px < Ex) || (Ex < Px && Px < Sx)))
    console.log(2);
  else console.log(0);
} else console.log(1);