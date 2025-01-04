const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const menus = input[1].split(" ").map(Number);
const set = new Set();
let sticker = 0;
let max = 0;

for (let i = 0; i < menus.length; i++) {
  const menu = menus[i];

  if (!set.has(menu)) {
    set.add(menu);
    sticker++;
    max = Math.max(max, sticker);
  } else sticker--;
}

console.log(max);