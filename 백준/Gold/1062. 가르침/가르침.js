const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

function backTracking(start, depth, selected) {
  if (depth === K - 5) {
    let knownBit = baseBit;
    let count = 0;

    for (const ch of selected) {
      knownBit |= 1 << (ch.charCodeAt(0) - 97);
    }

    for (const mask of wordMasks) {
      if ((mask & knownBit) === mask) count++;
    }

    if (maxCount < count) maxCount = count;
    return;
  }

  for (let i = start; i < chars.length; i++) {
    selected.push(chars[i]);
    backTracking(i + 1, depth + 1, selected);
    selected.pop();
  }
}

const [N, K] = input[0].split(" ").map(Number);
const chars = [
  ...new Set(
    input
      .slice(1)
      .map((row) => row.slice(4, -4))
      .flatMap((word) => word.split(""))
  ),
].filter((ch) => !"antic".includes(ch));
const wordMasks = input.slice(1).map((row) => {
  const mid = row.slice(4, -4);
  let mask = 0;

  for (const ch of new Set(mid)) {
    mask |= 1 << (ch.charCodeAt(0) - 97);
  }

  return mask;
});
let baseBit = 0;
let maxCount = 0;

for (const ch of "antic") {
  baseBit |= 1 << (ch.charCodeAt(0) - 97);
}

if (K < 5) console.log(0);
else if (chars.length <= K - 5) console.log(N);
else {
  backTracking(0, 0, []);
  console.log(maxCount);
}