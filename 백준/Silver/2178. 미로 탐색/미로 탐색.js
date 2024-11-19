const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

class Graph {
  constructor() {
    this.matrix = [];
    this.x = 0;
    this.y = 0;
    this.dx = [-1, 1, 0, 0];
    this.dy = [0, 0, -1, 1];
  }

  move() {
    const queue = [[0, 0, 1]];
    let pointer = 0;
    this.matrix[0][0] = "0";

    while (queue.slice(pointer).length > 0) {
      const [x, y, distance] = queue[pointer];
      if (x === N - 1 && y === M - 1) {
        console.log(distance);
        return;
      }

      for (let i = 0; i < 4; i++) {
        const nx = x + this.dx[i];
        const ny = y + this.dy[i];

        if (
          nx >= 0 &&
          nx < N &&
          ny >= 0 &&
          ny < M &&
          this.matrix[nx][ny] === "1"
        ) {
          this.matrix[nx][ny] = "0";
          queue.push([nx, ny, distance + 1]);
        }
      }
      pointer++;
    }
  }
}

const [N, M] = input[0].split(" ").map(Number);
const graph = new Graph();

for (let i = 1; i <= N; i++) {
  graph.matrix.push(input[i].split(""));
}

graph.move();