/**
Given ‘M’ sorted arrays, find the smallest range that includes at least one number from each of the ‘M’ lists.

Example 1:

Input: L1=[1, 5, 8], L2=[4, 12], L3=[7, 8, 10]
Output: [4, 7]
Explanation: The range [4, 7] includes 5 from L1, 4 from L2 and 7 from L3.
Example 2:

Input: L1=[1, 9], L2=[4, 12], L3=[7, 10, 16]
Output: [9, 12]
Explanation: The range [9, 12] includes 9 from L1, 12 from L2 and 10 from L3.

https://www.youtube.com/watch?v=Fqal25ZgEDo


**/

const Heap = require("collections/heap"); //http://www.collectionsjs.com

function find_smallest_range(lists) {
  const minHeap = new Heap([], null, (a, b) => b[0] - a[0]);
  let rangeStart = 0,
    rangeEnd = Infinity,
    currentMaxNumber = -Infinity;

  // put the 1st element of each array in the max heap
  lists.forEach(list => {
    minHeap.push([list[0], 0, list]);
    currentMaxNumber = Math.max(currentMaxNumber, list[0]);
  });

  // take the smallest(top) element from the min heap, if it gives us smaller range, update the ranges
  // if the array of the top element has more elements, insert the next element in the heap
  while (minHeap.length === lists.length) {
    const [num, i, list] = minHeap.pop();
    if (rangeEnd - rangeStart > currentMaxNumber - num) {
      rangeStart = num;
      rangeEnd = currentMaxNumber;
    }
    // condition for reaching last elem in current list
    if (list.length > i + 1) {
      // insert the next element in the heap
      minHeap.push([list[i + 1], i + 1, list]);
      currentMaxNumber = Math.max(currentMaxNumber, list[i + 1]);
    }
  }

  return [rangeStart, rangeEnd];
}
console.log(
  `Smallest range is: ${find_smallest_range([[1, 5, 8], [4, 12], [7, 8, 10]])}`
);

/**
Time complexity #
Since, at most, we’ll be going through all the elements of all the arrays and will remove/add one element in the heap in each step, the time complexity 
of the above algorithm will be O(N*logM)O(N∗logM) where ‘N’ is the total number of elements in all the ‘M’ input arrays.

Space complexity #
The space complexity will be O(M)O(M) because, at any time, our min-heap will be store one number from all the ‘M’ input arrays.
**/
