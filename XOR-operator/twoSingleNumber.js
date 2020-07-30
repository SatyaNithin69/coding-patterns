/**

In a non-empty array of numbers, every number appears exactly twice except two numbers that appear only once. Find the two numbers that appear only once.

Example 1:

Input: [1, 4, 2, 1, 3, 5, 6, 2, 3, 5]
Output: [4, 6]
Example 2:

Input: [2, 1, 3, 2]
Output: [1, 3]

https://algorithms.tutorialhorizon.com/find-two-non-repeating-numbers-in-an-array-in-on-time-and-o1-space/

https://algorithms.tutorialhorizon.com/find-the-right-most-set-bit-of-a-number/

**/

function find_single_numbers(nums) {
  let xor = nums[0];
  nums.forEach(num => {
    xor ^= num;
  });
  let rightMostBit = xor & ~(xor - 1);
  let group1 = 0;
  let group2 = 0;
  for (var i = 0; i < nums.length; i++) {
    let x = nums[i];
    if ((x & rightMostBit) !== 0) {
      group1 ^= x;
    } else {
      group2 ^= x;
    }
  }
  return [group1, group2];
}

let ar = [4, 5, 4, 5, 3, 2, 9, 3, 9, 8];
console.log(find_single_numbers(ar));
