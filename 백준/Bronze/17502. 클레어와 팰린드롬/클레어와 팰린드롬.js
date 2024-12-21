const fs = require("fs");
const [N, word] = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const reverseWord = word.split("").reverse();

for (let i = 0; i < N; i++) {
  if (reverseWord[i] === "?") {
    if (word[i] === "?") reverseWord[i] = "a";
    else reverseWord[i] = word[i];
  }
}

console.log(reverseWord.join(""));