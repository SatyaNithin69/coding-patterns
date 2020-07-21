/**
Given a sorted number array and two integers ‘K’ and ‘X’, find ‘K’ closest numbers to ‘X’ in the array. Return the numbers in the sorted order. ‘X’ is not necessarily present in the array.

Example 1:

Input: [5, 6, 7, 8, 9], K = 3, X = 7
Output: [6, 7, 8]
Example 2:

Input: [2, 4, 5, 6, 9], K = 3, X = 6
Output: [4, 5, 6]
Example 3:

Input: [2, 4, 5, 6, 9], K = 3, X = 10
Output: [5, 6, 9]

https://www.youtube.com/watch?v=J8yLD-x7fBI

**/

const Heap = require("collections/heap");

function find_closest_elements(nums, k, x) {
  let maxHeap = new Heap([], null, (a, b) => a[0] - b[0]);
  for (var i = 0; i < nums.length; i++) {
    maxHeap.push([Math.abs(nums[i] - x), nums[i]]);
    if (maxHeap.length > k) {
      maxHeap.pop();
    }
  }
  //return maxHeap;
  let list = [];
  while (maxHeap.length > 0) {
    var [freq, num] = maxHeap.pop();
    list.push(num);
  }
  return list;
}

console.log(
  `'K' closest numbers to 'X' are: ${find_closest_elements(
    [5, 6, 7, 8, 9],
    3,
    7
  )}`
);

/**
Time complexity #
The time complexity of the above algorithm is O(logN + K)O(logN+K). We need O(logN)O(logN) for Binary Search and O(K)O(K) for 
finding the ‘K’ closest numbers using the two pointers.

Space complexity #
If we ignoring the space required for the output list, the algorithm runs in constant space O(1)O(1)
**/
