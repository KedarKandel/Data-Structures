//Given an array of integers, find the largest missing positive number in a sorted array.

function largestMissingPositiveNumber(arr) {
  let max = Math.max(...arr);
  if (max < 1) {
    return 1;
  }

  for (let i = 1; i <= max; i++) {
    if (!arr.includes(i)) {
      return i;
    }
  }
  return max + 1;
}

const arr = [1, 2, 4, 5, 6, 7, 8, 9, 10];
console.log(largestMissingPositiveNumber(arr)); // output: 3
