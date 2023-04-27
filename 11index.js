// Write a function in JavaScript that takes a string as input and returns an array of all the characters that appear exactly once in the string, in the order they appear. If there are no unique characters, return an empty array. You can assume that the input string only contains alphanumeric characters (i.e. letters and digits) and is not empty.

function uniqueCharacters(string) {
  let obj = {};
  let uniques = [];
  for (let chr of string) {
    obj[chr] = (obj[chr] || 0) + 1;
  }
  for (let key in obj) {
    if (obj[key] === 1) {
      uniques.push(key);
    }
  }

  return uniques;
}

console.log(uniqueCharacters("hello"));
