const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function merge(array1, array2) {
  let result = [];

  while (array1.length && array2.length) {
    if (Number(array1[0][0]) <= Number(array2[0][0])) {
      result.push(array1.shift());
    } else {
      result.push(array2.shift());
    }
  }

  return [...result, ...array1, ...array2];
}

function mergeSort(array) {
  if (array.length <= 1) return array;

  let mid = Math.floor(array.length / 2);
  let left = mergeSort(array.slice(0, mid));
  let right = mergeSort(array.slice(mid));

  return merge(left, right);
}

const N = Number(input.shift());
const sortedArray = mergeSort(input.map((e) => e.split(" ")));

sortedArray.forEach(([age, name]) => console.log(`${age} ${name}`));