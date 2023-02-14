let A = [1, 2, -1, 3, 1, 4, 6];

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

