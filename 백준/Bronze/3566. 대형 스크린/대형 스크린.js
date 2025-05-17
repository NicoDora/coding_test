const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const [rh, rv, sh, sv] = input[0].split(" ").map(Number);
const n = Number(input[1]);
let result = Infinity;

for (let i = 0; i < n; i++) {
  const [rhi, rvi, shi, svi, pi] = input[i + 2].split(" ").map(Number);

  for (let dir = 0; dir < 2; dir++) {
    const [rh_i, rv_i, sh_i, sv_i] =
      dir === 0 ? [rhi, rvi, shi, svi] : [rvi, rhi, svi, shi];

    const colsRes = Math.ceil(rh / rh_i);
    const rowsRes = Math.ceil(rv / rv_i);

    const colsSize = Math.ceil(sh / sh_i);
    const rowsSize = Math.ceil(sv / sv_i);

    const cols = Math.max(colsRes, colsSize);
    const rows = Math.max(rowsRes, rowsSize);

    const cost = cols * rows * pi;
    result = Math.min(result, cost);
  }
}

console.log(result);