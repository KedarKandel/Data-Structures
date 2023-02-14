// Write a function:

/*function solution(A)
         that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

*/

// let A = [1, 2, -1, 3, 1, 4, 6];

function solution(A) {
  let positiveNumbers = A.filter((x) => x > 0);
  let smallestMissingPositive = 1;
  let nums = {};

  // positiveNumbers.forEach(num => nums[num] = true);
  for (let num of positiveNumbers) {
    nums[num] = true;
  }

  while (nums[smallestMissingPositive]) {
    smallestMissingPositive++;
  }

  return smallestMissingPositive;
}
// console.log(solution(A));

// question no. 2

//Given an array of integers, find the most repetitive integer. If there are several with same number of repetitions, return the largest.

// let A = [11, 2, 3, 4, 6, 1, 7, 1, 8, 9, 4, 10];

function findMostRepetitiveElement(A) {
  let nums = {};
  let maxNum = Number(0);
  let maxCount = 1;

  for (let num of A) {
    if (nums[num] === undefined) {
      nums[num] = 1;
    } else {
      nums[num]++;
    }
  }
  for (let key in nums) {
    if (nums[key] > maxCount) {
      maxNum = key;
      maxCount = nums[key];
    } else if (nums[key] === maxCount) {
      maxNum = key;
    }
  }

  return maxNum;
}

// console.log(findMostRepetitiveElement(A)); //4

/* Given an array of integers, find the first missing positive number.*/

function firstMissingPositive(A) {
  let obj = {};
  for (let num of A) {
    if (num > 0) {
      obj[num] = true;
    }
  }

  for (let i = 1; i <= A.length + 1; i++) {
    if (!obj[i]) {
      return i;
    }
  }
}

// let A = [11, 2, 3, 4, 6, 1, 7, 1, 8, 9, 4, 10];
// console.log(firstMissingPositive(A));


/* Given an array of integers, find the largest missing positive number.*/
function largestMissingPositive(A) {
    let obj = {};
    for (let num of A) {
      if (num > 0) {
        obj[num] = true;
      }
    }
  
    for (let i = A.length + 1; i >= 1; i--) {
      if (!obj[i]) {
        return i;
      }
    }
  }
  
//   let A = [11, 2, 3, 4, 6, 1, 7, 1, 8, 9, 4, 10]; //13
//   console.log(largestMissingPositive(A));


  // Write a function to find the largest missing integer in an array of integers. (in an array of integers)
  function largestMissingPositive(A) {
    let obj = {};
    for (let num of A) {
      if (num > 0) {
        obj[num] = true;
      }
    }
  
    let largestMissing = -1;
    for (let i = 1; i <= Math.max(...A); i++) {
      if (!obj[i]) {
        largestMissing = i;
        break;
      }
    }
  
    return largestMissing;
  }
  
  let A = [11, 2, 3, 4, 6, 1, 7, 1, 8, 9, 4, 10];//5
  console.log(largestMissingPositive(A));
  