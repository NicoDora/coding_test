const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

function binarySearch(low, high) {
  if (low > high) return high;

  const mid = Math.floor((low + high) / 2);
  let cutWoods = 0;

  for (let i = 0; i < N; i++) {
    if (tree[i] > mid) cutWoods += tree[i] - mid;
  }

  if (cutWoods >= M) return binarySearch(mid + 1, high);
  else return binarySearch(low, mid - 1);
}

const [N, M] = input[0].split(" ").map(Number);
const tree = input[1].split(" ").map(Number);

console.log(binarySearch(0, Math.max(...tree)));