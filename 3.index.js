//Given an array of integers, write a JavaScript function to find the second non-repeated integer in the array. For example, if the input array is [1, 2, 3, 1, 2, 4], the function should return 4 as it's the first non-repeated integer in the array.

function secondNonRepetitiveNum(arr) {
  let obj = {};
  for (let num of arr) {
    obj[num] = (obj[num] || 0) + 1;
  }

  let count = 0;
  for (let key in arr) {
    if (obj[key] === 1) {
      count++;
      if (count === 2) {
        return key;
      }
    }
  }
  return -1;
}

const arr = [1, 2, 3, 1, 2, 4,5];
console.log(secondNonRepetitiveNum(arr));//0utputs 4 
