const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

class Graph {
  constructor() {
    this.graph = {};
  }

  addNode(node) {
    this.graph[node] = [];
  }

  addEdge(node1, node2) {
    if (!this.graph[node1]) this.addNode(node1);
    if (!this.graph[node2]) this.addNode(node2);

    this.graph[node1].push(node2);
    this.graph[node2].push(node1);
  }

  sortGraph() {
    for (const [node, neighbors] of Object.entries(this.graph)) {
      neighbors.sort((a, b) => a - b);
    }
  }

  dfs(start) {
    const stack = [start];
    const visited = new Set();

    while (stack.length > 0) {
      const node = stack.pop();
      if (!visited.has(node)) visited.add(node);

      const neighbors = this.graph[node] || [];
      for (let i = neighbors.length - 1; i >= 0; i--) {
        const neighbor = neighbors[i];
        if (!visited.has(neighbor)) stack.push(neighbor);
      }
    }

    return visited;
  }

  bfs(start) {
    const queue = [start];
    const visited = new Set();
    let index = 0;

    while (queue.length > index) {
      const node = queue[index];
      index++;

      if (!visited.has(node)) {
        visited.add(node);

        const neighbors = this.graph[node] || [];
        for (const neighbor of neighbors) {
          if (!visited.has(neighbor)) queue.push(neighbor);
        }
      }
    }

    return visited;
  }

  print() {
    console.log(this.graph);
  }
}

const [N, M, V] = input[0].split(" ").map(Number);
const edges = input.slice(1).map((line) => line.split(" ").map(Number));
const graph = new Graph();

edges.forEach(([n1, n2]) => graph.addEdge(n1, n2));
graph.sortGraph();

console.log([...graph.dfs(V)].join(" ") + "\n" + [...graph.bfs(V)].join(" "));