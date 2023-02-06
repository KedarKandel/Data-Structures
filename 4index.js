//Given a binary search tree, write a JavaScript function to find the closest value to a given target value. For example, if the input binary search tree is:

//     5
//    / \
//   2   12
//  / \  / \
// 1  3 9  21
// And the target value is 6, the function should return 5 as it is the closest value to 6 in the binary search tree.

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function closestValue(root, target) {
  let closest = root.value;
  while (root !== null) {
    if (Math.abs(target - closest) > Math.abs(target - root.value)) {
      closest = root.value;
    }
    root = target < root.value ? root.left : root.right;
  }
  return closest;
}

const one = new Node(1);
const three = new Node(3);
const two = new Node(2, one, three);
const nine = new Node(9);
const twentyOne = new Node(21);
const twelve = new Node(12, nine, twentyOne);
const root = new Node(5, two, twelve);

const target = 19;
const result = closestValue(root, target);
console.log(result);//outputs 21


