/**
Given an array of ‘K’ sorted LinkedLists, merge them into one sorted list.

Example 1:

Input: L1=[2, 6, 8], L2=[3, 6, 7], L3=[1, 3, 4]
Output: [1, 2, 3, 3, 4, 6, 6, 7, 8]
Example 2:

Input: L1=[5, 8, 9], L2=[1, 7]
Output: [1, 5, 7, 8, 9]

**/

const Heap = require("collections/heap");

class ListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

function merge_lists(lists) {
  let resultHead = null;
  let resultTail = null;
  let minHeap = new Heap([], null, (a, b) => b.value - a.value);
  lists.forEach(a => {
    if (a !== null) {
      minHeap.push(a);
    }
  });
  while (minHeap.length > 0) {
    let node = minHeap.pop();
    if (resultHead === null) {
      // If it is first element;
      resultHead = node;
      resultTail = node;
    } else {
      //from next elements add to tail
      resultTail.next = node;
      resultTail = resultTail.next;
    }
    if (node.next != null) {
      minHeap.push(node.next);
    }
  }
  return resultHead;
}

const l1 = new ListNode(2);
l1.next = new ListNode(6);
l1.next.next = new ListNode(8);

const l2 = new ListNode(3);
l2.next = new ListNode(6);
l2.next.next = new ListNode(7);

const l3 = new ListNode(1);
l3.next = new ListNode(3);
l3.next.next = new ListNode(4);

let result = merge_lists([l1, l2, l3]);
console.log(result);

/**
Time complexity
Since we’ll be going through all the elements of all arrays and will be removing/adding one element to the heap in each step, the time complexity 
of the above algorithm will be O(N*logK),O(N∗logK), where ‘N’ is the total number of elements in all the ‘K’ input arrays.

Space complexity
The space complexity will be O(K)O(K) because, at any time, our min-heap will be storing one number from all the ‘K’ input arrays.

**/
