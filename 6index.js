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
console.log(solution(A));
