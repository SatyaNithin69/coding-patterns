/**
We are given an unsorted array containing ‘n’ numbers taken from the range 1 to ‘n’. The array originally contained all the numbers from 1 to ‘n’, but due to a data error, one of the numbers got duplicated which also resulted in one number going missing. Find both these numbers.

Example 1:

Input: [3, 1, 2, 5, 2]
Output: [2, 4]
Explanation: '2' is duplicated and '4' is missing.
Example 2:

Input: [3, 1, 2, 3, 6, 4]
Output: [3, 5]
Explanation: '3' is duplicated and '5' is missing.

**/

function find_corrupt_numbers(nums) {
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
  let corrupt_pair = [];
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) {
      corrupt_pair = [nums[i], nums[nums.length - 1]];
    }
  }
  return corrupt_pair;
}
console.log(find_corrupt_numbers([3, 1, 2, 5, 2]));

/**
Time complexity #
The time complexity of the above algorithm is O(n)O(n).

Space complexity #
The algorithm runs in constant space O(1)O(1)
**/
