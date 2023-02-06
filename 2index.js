//Given an array of integers, write a JavaScript function to find the first non-repeated integer in the array. For example, if the input array is [1, 2, 3, 1, 2, 4], the function should return 3 as it's the first non-repeated integer in the array.

function firstNonRepetitiveNum(arr) {
  let obj = {};
  for (let num of arr) {
    if (obj[num]) {
      obj[num]++;
    } else {
      obj[num] = 1;
    }
  }

  for (let num of arr) {
    if (obj[num] === 1) {
    }
  }
  return -1;
}

const arr = [1, 2, 3, 1, 2, 4];
console.log(firstNonRepetitiveNum(arr)); //returns 3
