const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const [up, down, goal] = input.split(" ").map(Number);

const needHeightBeforeOneDay = goal - up;
const canClimbHeightOfOneDay = up - down;

console.log(Math.ceil(needHeightBeforeOneDay / canClimbHeightOfOneDay) + 1);