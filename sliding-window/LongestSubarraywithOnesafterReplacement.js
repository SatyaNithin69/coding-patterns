/**
Problem Statement #
Given an array containing 0s and 1s, if you are allowed to replace no more than ‘k’ 0s with 1s, find the length of the longest contiguous subarray having all 1s.

Example 1:

Input: Array=[0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], k=2
Output: 6
Explanation: Replace the '0' at index 5 and 8 to have the longest contiguous subarray of 1s having length 6.
Example 2:

Input: Array=[0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1], k=3
Output: 9
Explanation: Replace the '0' at index 6, 9, and 10 to have the longest contiguous subarray of 1s having length 9.

https://www.youtube.com/watch?v=1X6U1DoAd2w

**/

function length_of_longest_substring(arr, k) {
  let start = 0;
  let maxOnesCount = 0;
  let maxLength = 0;
  for (var end = 0; end < arr.length; end++) {
    if (arr[end] === 1) {
      maxOnesCount += 1;
    }
    if (end - start + 1 - maxOnesCount > k) {
      if (arr[start] === 1) {
        maxOnesCount -= 1;
      }
      start = start + 1;
    }
    maxLength = Math.max(maxLength, end - start + 1);
  }
  return maxLength;
}

console.log(length_of_longest_substring([0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], 2));
console.log(
  length_of_longest_substring([0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1], 3)
);

/**
Time Complexity #
The time complexity of the above algorithm will be O(N)O(N) where ‘N’ is the count of numbers in the input array.

Space Complexity #
The algorithm runs in constant space O(1)O(1).
**/
