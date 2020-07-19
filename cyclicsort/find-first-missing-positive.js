/**
Given an unsorted array containing numbers, find the smallest missing positive number in it.

Example 1:

Input: [-3, 1, 5, 4, 2]
Output: 3
Explanation: The smallest missing positive number is '3'
Example 2:

Input: [3, -2, 0, 1, 2]
Output: 4
Example 3:

Input: [3, 2, 5, 1]
Output: 4

**/

function find_first_missing_positive(nums) {
  let index = 0;
  while (index < nums.length) {
    const targetIndex = nums[index] - 1;
    if (nums[index] !== nums[targetIndex]) {
      let temp = nums[targetIndex];
      nums[targetIndex] = nums[index];
      nums[index] = temp; // swap
    } else {
      index++;
    }
  }
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) {
      return i + 1;
    }
  }
}
console.log(find_first_missing_positive([-3, 1, 5, 4, 2]));

/**
Time complexity #
The time complexity of the above algorithm is O(n)O(n).

Space complexity #
The algorithm runs in constant space O(1)O(1)
**/
