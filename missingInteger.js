// 1. Write a function that takes an array of integers as input, where all numbers in the array are consecutive except for one number that is missing. The function should return the missing number.


// check if the index doesn't match with the value since they are consequtive  numbers

function missingInt(arr) {
    if (!arr.length) return;
    let missing = arr[0];
    
    for (let i = 1; i <= arr.length; i++) {
      if (i !== arr[i - 1]) {
        missing = i;
        break;
      }
    }
    return missing;
  }
  let arr = [1, 2, 3, 4, 6, 30, 7, 8, 9, 12];
  console.log(missingInt(arr)); //5
  
  // 2. Write a function that takes an array of numbers as input and returns an       object with the minimum and maximum numbers in the array.
  
  function objectMinMax(arr) {
    if (!arr.every((elm) => typeof elm === "number")) return "check arr";
  
    let min = arr[0];
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
      const currentNum = arr[i];
      if (currentNum > max) {
        max = currentNum;
      } else if (currentNum < min) {
        min = currentNum;
      }
    }
  
    return { min, max };
  }
  console.log(objectMinMax(arr)); //{min:1, max:30}
  
  //Find the first non-repeated character in a string: Write a function that takes a string as input and returns the first non-repeated character in the string. For example, "aabbcdd" should return "c". You can use an object as a lookup directory to count the occurrences of each character in the string.
  
  let str = "aabebcdd";
  function firstNonRepeated(str) {
    let obj = {};
    let answer;
  
    for (let char of str) {
      obj[char] = (obj[char] || 0) + 1;
    }
  
    for (let key in obj) {
      if (obj[key] === 1) {
        answer = key;
        break;
      }
    }
    return answer;
  }
  
  console.log(firstNonRepeated(str));