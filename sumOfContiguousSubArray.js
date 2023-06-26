
/*Problem: Given an input array of integers, write a function to find the maximum sum of any contiguous subarray within the array. The function should return the maximum sum.

For example, given the array [1, -2, 3, 4, -1, 2, 1, -5, 4], the maximum sum of a contiguous subarray is 9 (corresponding to the subarray [3, 4, -1, 2, 1]).*/

function findMaximumSum(nums) {
    let maxSum = nums[0];
    let currentSum = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
      currentSum = Math.max(nums[i], currentSum + nums[i]);
      maxSum = Math.max(maxSum, currentSum);
    }
    
    return maxSum;
  }
  
  // Test the function
  const nums = [1, -2, 3, 4, -1, 2, 1, -5, 4];
  const maxSum = findMaximumSum(nums);
  console.log(maxSum); // Output: 9
  