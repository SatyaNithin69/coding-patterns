/**
Design a class to efficiently find the Kth largest element in a stream of numbers.

The class should have the following two things:

The constructor of the class should accept an integer array containing initial numbers from the stream and an integer ‘K’.
The class should expose a function add(int num) which will store the given number and return the Kth largest number.
Example 1:

Input: [3, 1, 5, 12, 2, 11], K = 4
1. Calling add(6) should return '5'.
2. Calling add(13) should return '6'.
2. Calling add(4) should still return '6'.

**/

const Heap = require("collections/heap");

class KthLargestNumberInStream {
  constructor(nums, k) {
    this.k = k;
    this.minHeap = new Heap([], null, (a, b) => b - a);
    nums.forEach(num => {
      this.add(num);
    });
  }
  add(num) {
    this.minHeap.push(num);
    if (this.minHeap.length > this.k) {
      this.minHeap.pop();
    }
    return this.minHeap.peek();
  }
}

const kthLargestNumber = new KthLargestNumberInStream([3, 1, 5, 12, 2, 11], 4);
console.log(kthLargestNumber);
console.log(`4th largest number is: ${kthLargestNumber.add(6)}`);

/**
Time complexity #
The time complexity of the add() function will be O(logK)O(logK) since we are inserting the new number in the heap.

Space complexity #
The space complexity will be O(K)O(K) for storing numbers in the heap.
**/
