/**
Given an unsorted array of numbers, find Kth smallest number in it.

Please note that it is the Kth smallest number in the sorted order, not the Kth distinct element.

Note: For a detailed discussion about different approaches to solve this problem, take a look at Kth Smallest Number.

Example 1:

Input: [1, 5, 12, 2, 11, 5], K = 3
Output: 5
Explanation: The 3rd smallest number is '5', as the first two smaller numbers are [1, 2].
Example 2:

Input: [1, 5, 12, 2, 11, 5], K = 4
Output: 5
Explanation: The 4th smallest number is '5', as the first three small numbers are [1, 2, 5].
Example 3:

Input: [5, 12, 11, -1, 12], K = 3
Output: 11
Explanation: The 3rd smallest number is '11', as the first two small numbers are [5, -1].
**/
const Heap = require("collections/heap");

function find_Kth_smallest_number(nums, k) {
  let maxHeap = new Heap([], null, (a, b) => a - b);
  for (var i = 0; i < nums.length; i++) {
    maxHeap.push(nums[i]);
    if (maxHeap.length > k) {
      maxHeap.pop();
    }
  }
  return maxHeap.peek();
}

console.log(
  `Kth smallest number is: ${find_Kth_smallest_number([1, 5, 12, 2, 11, 5], 3)}`
);

// since there are two 5s in the input array, our 3rd and 4th smallest numbers should be a '5'
console.log(
  `Kth smallest number is: ${find_Kth_smallest_number([1, 5, 12, 2, 11, 5], 4)}`
);

console.log(
  `Kth smallest number is: ${find_Kth_smallest_number([5, 12, 11, -1, 12], 3)}`
);

/**
 * Time complexity #
The time complexity of this algorithm is O(K*logK+(N-K)*logK)O(K∗logK+(N−K)∗logK), which is asymptotically equal to O(N*logK)O(N∗logK)

Space complexity #
The space complexity will be O(K)O(K) because we need to store ‘K’ smallest numbers in the heap.
 * 
 */
