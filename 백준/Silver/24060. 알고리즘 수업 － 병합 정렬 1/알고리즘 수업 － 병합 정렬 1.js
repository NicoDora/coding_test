const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function merge_sort(A, front, rear) {
  if (front < rear) {
    const mid = Math.floor((front + rear) / 2);
    merge_sort(A, front, mid);
    merge_sort(A, mid + 1, rear);
    merge(A, front, mid, rear);
  }
}

function merge(A, front, mid, rear) {
  let i = front,
    j = mid + 1,
    t = 0;
  const tmp = [];

  while (i <= mid && j <= rear) {
    if (A[i] <= A[j]) tmp[t++] = A[i++];
    else tmp[t++] = A[j++];
  }

  while (i <= mid) tmp[t++] = A[i++];
  while (j <= rear) tmp[t++] = A[j++];

  i = front;
  t = 0;
  while (i <= rear) {
    if (++count === K) result = tmp[t];
    A[i++] = tmp[t++];
  }

  if (count < K) result = -1;
}

const [Alength, K] = input[0].split(" ").map(Number);
const A = input[1].split(" ").map(Number);
let count = 0;
let result = 0;

merge_sort(A, 0, Alength - 1);

console.log(result);