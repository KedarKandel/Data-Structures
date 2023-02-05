//Given an array of numbers, write a JavaScript function to find the second largest number in the array.

//brain storming

const data = [1, 3, 5, 7, 9, 3, 9, 8, 50, 27];

function secondLargestNum(data) {
  let secondMax = 0;
  let max = 0;
  let obj = {};
  for (let num of data) {
    obj[num] = true;
  }

  for (let key in obj) {
    if (parseInt(key) > secondMax) {
      max = secondMax;
      secondMax = key;
    } else if (parseInt(key) > max) {
      max = key;
    }
  }
  return secondMax;
}
console.log(secondLargestNum(data));
