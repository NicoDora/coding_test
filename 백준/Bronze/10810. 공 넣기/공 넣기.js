const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [baguniSize, count] = input[0].split(" ").map(Number);

function createBaguniBySize(baguniSize) {
  const baguni = [];
  for (let i = 0; i < baguniSize; i++) baguni.push(0);

  return baguni;
}

function inputBallToBaguni(baguni, count) {
  for (let i = 1; i <= count; i++) {
    const [start, end, number] = input[i].split(" ").map(Number);
    baguni.fill(number, start - 1, end);
  }
}

const baguni = createBaguniBySize(baguniSize);
inputBallToBaguni(baguni, count);
const result = baguni.join(" ");

console.log(result);