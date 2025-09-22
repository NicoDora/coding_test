const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

function calculateScore(team) {
  let score = 0;

  for (let i = 0; i < team.length - 1; i++) {
    for (let j = i + 1; j < team.length; j++) {
      const p1 = team[i];
      const p2 = team[j];

      score += S[p1][p2] + S[p2][p1];
    }
  }

  return score;
}

function dfs(start, startTeam) {
  if (startTeam.length === N / 2) {
    const linkTeam = members.filter((member) => !startTeam.includes(member));

    const startScore = calculateScore(startTeam);
    const linkScore = calculateScore(linkTeam);
    const diff = Math.abs(startScore - linkScore);

    minDiff = Math.min(minDiff, diff);

    return;
  }

  for (let i = start; i < N; i++) {
    startTeam.push(i);
    dfs(i + 1, startTeam);
    startTeam.pop();
  }
}

const N = Number(input[0]);
const S = input.slice(1).map((row) => row.split(" ").map(Number));
const members = Array.from({ length: N }, (_, i) => i);
let minDiff = Infinity;

dfs(0, []);

console.log(minDiff);