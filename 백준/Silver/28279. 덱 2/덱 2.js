const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

class Deque {
  constructor() {
    this.deque = {};
    this.size = 0;
    this.front = 0;
    this.rear = 0;
  }

  pushFront(num) {
    this.front--;
    this.deque[this.front] = num;
    this.size++;
  }

  pushBack(num) {
    this.deque[this.rear] = num;
    this.rear++;
    this.size++;
  }

  popFront() {
    if (this.isEmpty()) return -1;
    const popNum = this.deque[this.front];
    delete this.deque[this.front];
    this.front++;
    this.size--;
    return popNum;
  }

  popBack() {
    if (this.isEmpty()) return -1;
    this.rear--;
    const popNum = this.deque[this.rear];
    delete this.deque[this.rear];
    this.size--;
    return popNum;
  }

  getSize() {
    return this.size;
  }

  isEmpty() {
    return this.size ? 0 : 1;
  }

  getFront() {
    return this.isEmpty() ? -1 : this.deque[this.front];
  }

  getBack() {
    return this.isEmpty() ? -1 : this.deque[this.rear - 1];
  }
}

function program(cmd, x) {
  switch (cmd) {
    case 1:
      deque.pushFront(x);
      return null;
    case 2:
      deque.pushBack(x);
      return null;
    case 3:
      return deque.popFront();
    case 4:
      return deque.popBack();
    case 5:
      return deque.getSize();
    case 6:
      return deque.isEmpty();
    case 7:
      return deque.getFront();
    case 8:
      return deque.getBack();
  }
}

const N = Number(input[0]);
const deque = new Deque();
const result = [];

for (let i = 1; i <= N; i++) {
  const [cmd, x] = input[i].split(" ").map(Number);
  const res = program(cmd, x);
  if (res !== null) result.push(res);
}

console.log(result.join("\n"));