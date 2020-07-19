/**
Given an unsorted array containing numbers and a number ‘k’, find the first ‘k’ missing positive numbers in the array.

Example 1:

Input: [3, -1, 4, 5, 5], k=3
Output: [1, 2, 6]
Explanation: The smallest missing positive numbers are 1, 2 and 6.
Example 2:

Input: [2, 3, 4], k=3
Output: [1, 5, 6]
Explanation: The smallest missing positive numbers are 1, 5 and 6.
Example 3:

Input: [-2, -3, 4], k=2
Output: [1, 2]
Explanation: The smallest missing positive numbers are 1 and 2.


https://www.youtube.com/watch?v=rrXPOQ3W_8g


**/

function find_first_k_missing_positive(nums, k) {
  let index = 0;
  while (index < nums.length) {
    const targetIndex = nums[index] - 1;
    if (nums[index] > 0 && nums[index] !== nums[targetIndex]) {
      let temp = nums[targetIndex];
      nums[targetIndex] = nums[index];
      nums[index] = temp; // swap
    } else {
      index++;
    }
  }
  let missingNumbers = [];
  let extraNumbers = new Set();
  for (var i = 0; i < nums.length; i++) {
    if (missingNumbers.length < k) {
      if (nums[i] !== i + 1) {
        missingNumbers.push(i + 1);
        extraNumbers.add(i + 1);
      }
    }
  }
  let extra = 1;
  while (missingNumbers.length < k) {
    let next = nums.length + extra;
    if (!extraNumbers.has(next)) {
      missingNumbers.push(next);
    }
    extra++;
  }
  return missingNumbers;
}
console.log(find_first_k_missing_positive([3, -1, 4, 5, 5], 3));

/**
Time complexity #
The time complexity of the above algorithm is O(n + k)O(n+k), as the last two for loops will run for O(n)O(n) and O(k)O(k) times respectively.

Space complexity #
The algorithm needs O(k)O(k) space to store the extraNumbers.
**/
