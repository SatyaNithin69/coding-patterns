/**
https://www.youtube.com/watch?v=3DdP6Ef8YZM
**/

const Heap = require("collections/heap");

function find_k_largest_numbers(nums, k) {
  let minHeap = new Heap([], null, (a, b) => b - a);
  for (var i = 0; i < nums.length; i++) {
    minHeap.push(nums[i]);
    if (minHeap.length > k) {
      minHeap.pop();
    }
  }
  return minHeap.toArray();
}
console.log(
  `Here are the top K numbers: ${find_k_largest_numbers(
    [3, 1, 5, 12, 2, 11],
    3
  )}`
);
console.log(
  `Here are the top K numbers: ${find_k_largest_numbers(
    [5, 12, 11, -1, 12],
    3
  )}`
);

Time complexity #
As discussed above, the time complexity of this algorithm is O(K*logK+(N-K)*logK)O(K∗logK+(N−K)∗logK), which is asymptotically equal to O(N*logK)O(N∗logK)

Space complexity #
The space complexity will be O(K)O(K) since we need to store the top ‘K’ numbers in the heap.
