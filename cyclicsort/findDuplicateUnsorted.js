/**

We are given an unsorted array containing ‘n+1’ numbers taken from the range 1 to ‘n’. The array has only one duplicate but it can be repeated multiple times. Find that duplicate number without using any extra space. You are, however, allowed to modify the input array.

Example 1:

Input: [1, 4, 4, 3, 2]
Output: 4
Example 2:

Input: [2, 1, 3, 3, 5, 4]
Output: 3
Example 3:

Input: [2, 4, 1, 4, 4]
Output: 4

https://www.youtube.com/watch?v=r-kdN2wmios

**/

function find_duplicate(nums) {
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
  return nums[nums.length - 1];
}

console.log(find_duplicate([1, 2, 4, 3, 3]));
/**
Time complexity #
The time complexity of the above algorithm is O(n)O(n).

Space complexity #
The algorithm runs in constant space O(1)O(1) but modifies the input array.
**/
