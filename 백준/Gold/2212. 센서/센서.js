const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const N = Number(input[0]);
const K = Number(input[1]);
const sensor = [
  ...new Set(
    input[2]
      .split(" ")
      .map(Number)
      .sort((a, b) => a - b)
  ),
];
const distance = [];
let result = 0;

for (let i = 0; i < sensor.length - 1; i++) {
  const [current, next] = [sensor[i], sensor[i + 1]];
  distance.push(Math.abs(current - next));
}

distance.sort((a, b) => a - b);

for (let i = 0; i < K - 1; i++) {
  distance.pop();
}

for (let i = 0; i < distance.length; i++) {
  result += distance[i];
}

console.log(result);