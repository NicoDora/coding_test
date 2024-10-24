const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

function calculate(input) {
  const array = [];
  const [A, B, C] = input.map(Number);

  array.push((A + B) % C);
  array.push(((A % C) + (B % C)) % C);
  array.push((A * B) % C);
  array.push(((A % C) * (B % C)) % C);

  return array;
}

const result = calculate(input);

result.forEach((e) => {
  console.log(e);
});