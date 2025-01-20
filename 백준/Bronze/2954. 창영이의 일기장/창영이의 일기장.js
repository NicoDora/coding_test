const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split(" ");

const result = Array(input.length).fill("");

for (let i = 0; i < input.length; i++) {
  const sentence = input[i];

  for (let j = 0; j < sentence.length; j++) {
    result[i] += sentence[j];

    if (
      sentence[j] === "a" ||
      sentence[j] === "e" ||
      sentence[j] === "i" ||
      sentence[j] === "o" ||
      sentence[j] === "u"
    ) {
      j += 2;
    }
  }
}

console.log(result.join(" "));