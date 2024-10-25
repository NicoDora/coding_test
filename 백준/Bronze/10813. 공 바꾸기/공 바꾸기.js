const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [baguniSize, count] = input[0].split(" ").map(Number);

function createBaguniBySize(baguniSize) {
  const baguni = [];
  for (let i = 1; i <= baguniSize; i++) baguni.push(i);

  return baguni;
}

function switchValueInArray(array, num1, num2) {
  [array[num1], array[num2]] = [array[num2], array[num1]];
}

const baguni = createBaguniBySize(baguniSize);

for (let i = 1; i <= count; i++) {
  let [firstNum, secondNum] = input[i].split(" ").map(Number);
  switchValueInArray(baguni, firstNum - 1, secondNum - 1);
}

const result = baguni.join(" ");
console.log(result);