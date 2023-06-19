
//Question: Given an array arr and a number n, write a function chunkArray(arr, n) that splits the array into subarrays of length n and returns a new array containing these subarrays. If the length of arr is not evenly divisible by n, the last subarray should contain the remaining elements. Implement this function in JavaScript.

// example
// const arr = [2, 3, 4, 6, 5, 7, 9, 10];
// let n = 3;
// console.log(chunkArray(arr, n));

// Expected output: [[2, 3, 4], [6, 5, 7], [9, 10]]

function chuckArray(arr, n) {
  const chunked = [];
 
  for (let num of arr) {
    let last = chunked[chunked.length - 1];
    if (!last || last.length === n) {
      chunked.push([num]);
    } else {
      last.push(num);
    }
  }

  return chunked;
}

const arr = [2, 3, 4, 6, 5, 7, 9, 10];
let n = 3;
console.log(chuckArray(arr, n));
