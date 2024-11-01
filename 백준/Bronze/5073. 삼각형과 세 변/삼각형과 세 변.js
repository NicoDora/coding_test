const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

for (let i = 0; i < input.length - 1; i++) {
  const [side1, side2, side3] = input[i]
    .split(" ")
    .map(Number)
    .sort((a, b) => b - a);

  if (side1 < side2 + side3) {
    if (side1 === side2 || side2 === side3) {
      if (side1 === side3) {
        console.log("Equilateral");
      } else {
        console.log("Isosceles");
      }
    } else {
      console.log("Scalene");
    }
  } else {
    console.log("Invalid");
  }
}