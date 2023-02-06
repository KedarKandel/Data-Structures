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
