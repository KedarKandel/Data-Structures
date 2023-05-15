const nestedArray = [1, [2, [3, 4], 5], 6, [7]];

function flattenArray(nestedArray) {
  let flattenedArray = [];
  function flattenHelper(nestedArray) {
    for (let i = 0; i < nestedArray.length; i++) {
      if (Array.isArray(nestedArray[i])) {
        flattenHelper(nestedArray[i]);
      } else flattenedArray.push(nestedArray[i]);
    }
  }
  flattenHelper(nestedArray)
  return flattenedArray
}

console.log(flattenArray(nestedArray))
// Output: [1, 2, 3, 4, 5, 6, 7]
