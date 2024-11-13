const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

class Queue {
  constructor() {
    this.queue = [];
    for (let i = 0; i < N; i++) {
      if (A[i] === 0) this.queue.push(B[i]);
    }
    this.front = 0;
    this.rear = this.queue.length;
  }

  unshift(num) {
    this.front--;
    this.queue[this.front] = num;
  }

  pop() {
    this.rear--;
    const popNum = this.queue[this.rear];
    delete this.queue[this.rear];
    return popNum;
  }
}

const N = Number(input[0]);
const A = input[1].split(" ").map(Number);
const B = input[2].split(" ").map(Number);
const M = Number(input[3]);
const C = input[4].split(" ").map(Number);
const queue = new Queue();
const result = [];

for (let i = 0; i < M; i++) {
  queue.unshift(C[i]);
  result.push(queue.pop());
}

console.log(result.join(" "));