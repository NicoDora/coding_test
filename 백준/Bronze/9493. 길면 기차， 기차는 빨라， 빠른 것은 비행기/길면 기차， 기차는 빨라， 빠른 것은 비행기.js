const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const result = [];

for (let i = 0; i < input.length - 1; i++) {
  const [M, A, B] = input[i].split(" ").map(Number);
  const trainHour = M / A;
  const airplaneHour = M / B;

  const gap = trainHour - airplaneHour;
  const gapHour = Math.floor(gap);
  const gapMin = Math.floor((gap - gapHour) * 60);
  const gapSecond = Math.round((gap * 3600) % 60);

  result.push(`${gapHour}:${String(gapMin).padStart(2, "0")}:${String(gapSecond).padStart(2, "0")}`);
}

console.log(result.join("\n"));