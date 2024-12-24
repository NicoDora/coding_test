const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class Deque {
  constructor() {
    this.front = null;
    this.rear = null;
    this.length = 0;
  }

  pushFront(value) {
    const node = new Node(value);

    if (this.isEmpty()) {
      this.front = node;
      this.rear = node;
    } else {
      this.front.prev = node;
      node.next = this.front;
      this.front = node;
    }

    this.length++;
  }

  pushBack(value) {
    const node = new Node(value);

    if (this.isEmpty()) {
      this.front = node;
      this.rear = node;
    } else {
      this.rear.next = node;
      node.prev = this.rear;
      this.rear = node;
    }

    this.length++;
  }

  popFront() {
    if (this.isEmpty()) return -1;

    const shift = this.front;
    this.front = this.front.next;
    this.length === 1 ? (this.front = null) : (this.front.prev = null);
    this.length--;

    return shift.value;
  }

  popBack() {
    if (this.isEmpty()) return -1;

    const pop = this.rear;
    this.rear = this.rear.prev;
    this.length === 1 ? (this.rear = null) : (this.rear.next = null);
    this.length--;

    return pop.value;
  }

  getSize() {
    return this.length;
  }

  isEmpty() {
    return this.length ? 0 : 1;
  }

  getFront() {
    return this.length ? this.front.value : -1;
  }

  getBack() {
    return this.length ? this.rear.value : -1;
  }
}

const N = Number(input[0]);
const deque = new Deque();
const result = [];

for (let i = 1; i <= N; i++) {
  const [commend, value] = input[i].split(" ");

  switch (commend) {
    case "push_front":
      deque.pushFront(value);
      break;
    case "push_back":
      deque.pushBack(value);
      break;
    case "pop_front":
      result.push(deque.popFront());
      break;
    case "pop_back":
      result.push(deque.popBack());
      break;
    case "size":
      result.push(deque.getSize());
      break;
    case "empty":
      result.push(deque.isEmpty());
      break;
    case "front":
      result.push(deque.getFront());
      break;
    case "back":
      result.push(deque.getBack());
      break;
    default:
      break;
  }
}

console.log(result.join("\n"));