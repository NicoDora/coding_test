const fs = require("fs");
const [N, ...set] = fs.readFileSync(0, "utf-8").toString().trim().split("\n").map(Number);

set.sort((a, b) => a - b);

for (let n = N - 1; n >= 0; n--) {
  const k = set[n];

  for (let i = 0; i < N; i++) {
    const x = set[i];
    let left = i;
    let right = N - 1;

    while (left <= right) {
      const sum = set[left] + set[right];
      const target = k - x;

      if (sum === target) {
        console.log(k);
        return;
      } else if (sum < target) left++;
      else right--;
    }
  }
}