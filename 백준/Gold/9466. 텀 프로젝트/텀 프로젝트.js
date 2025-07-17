const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

function dfs(finished, visited, node, select, nonTeam) {
  visited[node] = true;

  const nextNode = select[node];

  if (!visited[nextNode]) dfs(finished, visited, nextNode, select, nonTeam);
  else if (!finished[nextNode]) {
    let cycleNode = nextNode;

    while (cycleNode !== node) {
      cycleNode = select[cycleNode];
      nonTeam.count--;
    }
    nonTeam.count--;
  }

  finished[node] = true;
}

const T = Number(input[0]);
const result = [];
let index = 1;

for (let t = 0; t < T; t++) {
  const n = Number(input[index++]);
  const select = [0, ...input[index++].split(" ").map(Number)];
  const finished = Array(n + 1).fill(false);
  const visited = Array(n + 1).fill(false);
  const nonTeam = { count: n };

  for (let i = 1; i <= n; i++) {
    if (!finished[i]) {
      dfs(finished, visited, i, select, nonTeam);
    }
  }

  result.push(nonTeam.count);
}

console.log(result.join("\n"));