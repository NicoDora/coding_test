const fs = require("fs");
const [N, ...input] = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

function getMaxFreqNum() {
  const map = new Map();
  let maxFreq = 0;
  let array = [];
  let result = 0;

  for (let i = 0; i < N; i++) {
    const key = sortedInput[i];
    let value = map.get(key);
    if (value) map.set(key, ++value);
    else map.set(key, 1);
  }

  for (let [num, freq] of map.entries()) {
    if (freq > maxFreq) {
      maxFreq = freq;
      array = [num];
    } else if (freq === maxFreq) array.push(num);
  }

  if (array.length === 1) result = array[0];
  else result = array[1];

  return result;
}

const sortedInput = input.sort((a, b) => a - b);
let sum = 0;

for (let n of sortedInput) {
  sum += n;
}

const avg = Math.round(sum / N);
const med = sortedInput[Math.floor(N / 2)];
const maxFreq = getMaxFreqNum();
const range = sortedInput[sortedInput.length - 1] - sortedInput[0];

console.log([avg, med, maxFreq, range].join("\n"));