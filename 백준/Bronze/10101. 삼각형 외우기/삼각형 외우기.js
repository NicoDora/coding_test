const fs = require("fs");
const [angle1, angle2, angle3] = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

if (angle1 + angle2 + angle3 === 180) {
  if (angle1 === angle2 || angle2 === angle3 || angle1 === angle3) {
    if (angle1 === angle2 && angle2 === angle3) {
      console.log("Equilateral");
    } else {
      console.log("Isosceles");
    }
  } else {
    console.log("Scalene");
  }
} else {
  console.log("Error");
}