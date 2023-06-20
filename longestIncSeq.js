/* Problem: Given an array of integers, find the length of the longest increasing subsequence.

Description:
Given an array nums of integers, find the length of the longest increasing subsequence (LIS).

A subsequence is a sequence that can be derived from the array by deleting some or no elements without changing the order of the remaining elements. The LIS is the longest subsequence in which the elements are in increasing order.*/

// const nums = [10, 9, 2, 5, 3, 7, 101, 18];
// console.log(findLongestIncreasingSubsequence(nums)); // Output: 4 (The LIS is [2, 3, 7, 101])

function findLongestIncreasingSubsequence(nums) {
    if (nums.length === 0) {
      return 0;
    }
    
    const arr = new Array(nums.length).fill(1);
    let maxLength = 1;
  
    for (let i = 1; i < nums.length; i++) {
      for (let j = 0; j < i; j++) {
        if (nums[i] > nums[j]) {
          arr[i] = Math.max(arr[i], arr[j] + 1);
        }
      }
      maxLength = Math.max(maxLength, arr[i]);
    }
  
    return maxLength;
  }
  
  const nums = [10, 9, 2, 5, 3, 7, 101, 18];
  console.log(findLongestIncreasingSubsequence(nums)); // Output: 4
  