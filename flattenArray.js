const nestedArray = [1, [2, [3, [8], 4], 5], 6, [7]];

function flattenArray(nestedArray) {
  const answer = [];

  function helper(nestedArray) {
    for (let i = 0; i < nestedArray.length; i++) {
      if (Array.isArray(nestedArray[i])) {
        helper(nestedArray[i])
      }else answer.push(nestedArray[i])
    }
  }
  helper(nestedArray)
  return answer
}

console.log(flattenArray(nestedArray));
// Output: [1, 2, 3, 4, 5, 6, 7]

