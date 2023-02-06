//Write a JavaScript function largestNumber that takes an array of numbers as an input and returns the largest possible number that can be formed from those numbers as a string.

//Example:
//console.log(largestNumber(arr)); // Output: "95021"

function largestNumber(arr) {
  let result = "";
  arr.sort((a, b) => {
    let str1 = a.toString() + b.toString();
    let str2 = b.toString() + a.toString();
    return str2 - str1;
  });
  for (let num of arr) {
    result += num;
  }
  return result;
}

let data = [50, 2, 1, 9];
console.log(largestNumber(data)); // Output: "95021"

//ANOTHER WAY

function largestNumber(arr) {
  let result = "";
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let str1 = arr[i].toString() + arr[j].toString();
      let str2 = arr[j].toString() + arr[i].toString();
      if (str2 > str1) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
    result += arr[i];
  }
  return result;
}

let arr = [50, 2, 1, 9];
console.log(largestNumber(arr)); // Output: "95021"
