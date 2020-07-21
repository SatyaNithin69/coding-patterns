const Heap = require("collections/heap");

function find_sum_of_elements(nums, k1, k2) {
  let minHeap = new Heap(nums, [], (a, b) => b - a);
  for (var i = 0; i < k1; i++) {
    minHeap.pop();
  }
  let elemSum = 0;
  //k2-k1-1 = > gives elements between range of k1 , k2;
  for (var j = 0; j < k2 - k1 - 1; j++) {
    elemSum = elemSum + minHeap.pop();
  }
  return elemSum;
}

console.log(
  `Sum of all numbers between k1 and k2 smallest numbers: ${find_sum_of_elements(
    [1, 3, 12, 5, 15, 11],
    3,
    6
  )}`
);
console.log(
  `Sum of all numbers between k1 and k2 smallest numbers: ${find_sum_of_elements(
    [3, 5, 8, 7],
    1,
    4
  )}`
);

/**
 * Time complexity #
Since we need to put all the numbers in a min-heap, the time complexity of the above algorithm will be O(N*logN)O(N∗logN) where ‘N’ is the total input numbers.

Space complexity #
The space complexity will be O(N)O(N), as we need to store all the ‘N’ numbers in the heap.
 * **/
