/**
Given an unsorted array of numbers, find the top ‘K’ frequently occurring numbers in it.

Example 1:

Input: [1, 3, 5, 12, 11, 12, 11], K = 2
Output: [12, 11]
Explanation: Both '11' and '12' apeared twice.
Example 2:

Input: [5, 12, 11, 3, 11], K = 2
Output: [11, 5] or [11, 12] or [11, 3]
Explanation: Only '11' appeared twice, all other numbers appeared once.

**/

const Heap = require("collections/heap"); //http://www.collectionsjs.com

function find_k_frequent_numbers(nums, k) {
  let minHeap = new Heap([], null, (a, b) => b[0] - a[0]);
  let freqMap = {};
  for (var i = 0; i < nums.length; i++) {
    let left = nums[i];
    if (!(left in freqMap)) {
      freqMap[left] = 0;
    }
    freqMap[left] += 1;
  }
  Object.keys(freqMap).forEach(num => {
    minHeap.push([freqMap[num], num]);
    if (minHeap.length > k) {
      minHeap.pop();
    }
  });

  var topNumbers = [];
  while (minHeap.length > 0) {
    topNumbers.push(minHeap.pop()[1]);
  }
  return topNumbers;
}

console.log(
  `Here are the K frequent numbers: ${find_k_frequent_numbers(
    [1, 3, 5, 12, 11, 12, 11],
    2
  )}`
);

console.log(
  `Here are the K frequent numbers: ${find_k_frequent_numbers(
    [5, 12, 11, 3, 11],
    2
  )}`
);

Time complexity #
The time complexity of the above algorithm is O(N+N*logK)O(N+N∗logK).

Space complexity #
The space complexity will be O(N)O(N). Even though we are storing only ‘K’ numbers in the heap. For the frequency map, however, we need to store all 
the ‘N’ numbers
