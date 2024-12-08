const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const T = Number(input[0]);
const result = [];

for (let i = 1; i <= T; i++) {
  const [M, address] = input[i].split(" ");

  if (M === "1") {
    const binaryNums = address
      .split(".")
      .map((e) => Number(e).toString(2).padStart(8, "0"));
    const decimalNum = BigInt(`0b${binaryNums.join("")}`);

    result.push(decimalNum.toString());
  } else if (M === "2") {
    const binary = BigInt(address).toString(2).padStart(64, "0");
    const ipv8 = [];

    for (let j = 0; j < 64; j += 8) {
      ipv8.push(parseInt(binary.slice(j, j + 8), 2));
    }

    result.push(ipv8.join("."));
  }
}

console.log(result.join("\n"));