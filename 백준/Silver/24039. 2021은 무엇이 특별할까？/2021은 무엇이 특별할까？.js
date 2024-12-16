const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim();

function generatePrimes(limit) {
  const array = Array(limit + 1).fill(1);

  array[0] = array[1] = 0;

  // 에라토스테네스의 체
  for (let i = 2; i <= Math.sqrt(limit); i++) {
    if (array[i]) {
      for (let j = i * i; j <= limit; j += i) {
        array[j] = 0;
      }
    }
  }

  return array
    .map((value, index) => (value ? index : null))
    .filter((value) => value !== null);
}

const N = Number(input);
const limit = Math.max(10001, 2 * N);
const primes = generatePrimes(limit);

for (let i = 0; i < primes.length - 1; i++) {
  const result = primes[i] * primes[i + 1];

  if (result > N) {
    console.log(result);
    break;
  }
}