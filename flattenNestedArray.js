//Write a JavaScript function to flatten a nested array of any depth. For example, given the following input:

// input = [1, [2, [3, [4, [5]]]]];
// The function should return a flattened array:
// output = [1, 2, 3, 4, 5];

const flatten = (input) => {
  let output = [];
  for (let i = 0; i < input.length; i++) {
    if (Array.isArray(input[i])) {
      output = output.concat(flatten(input[i]));
    } else {
      output.push(input[i]);
    }
  }
  return output;
};

const input = [1, [2, [3, [4, [5]]]]];
const output = flatten(input);
console.log(output); // output is [1, 2, 3, 4, 5]

//Given a string, write a function to check if it is a palindrome. A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. Examples of palindromes include "A man, a plan, a canal, Panama!", "Able was I ere I saw Elba", "Madam In Eden, I'm Adam", etc.

const isPelindrome = (str) => {
  const string = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  return string === string.split("").reverse().join("");
};

let str = "A man, a plan, a canal, Panama!";
console.log(isPelindrome(str));

