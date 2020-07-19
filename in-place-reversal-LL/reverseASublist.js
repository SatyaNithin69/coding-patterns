/**
Given the head of a LinkedList and two positions ‘p’ and ‘q’, reverse the LinkedList from position ‘p’ to ‘q’.

https://www.youtube.com/watch?v=BE0hruM5O5U
**/

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

function reverse_sub_list(head, start, end) {
  let current = head;
  let position = 1;
  while (position < start - 1) {
    current = current.next;
    position++;
  }
  let nodeBeforeSublist = current;
  let workingPointer = nodeBeforeSublist.next;
  while (start < end) {
    let nodeToBeExtracted = workingPointer.next;
    workingPointer.next = nodeToBeExtracted.next;
    nodeToBeExtracted.next = nodeBeforeSublist.next;
    nodeBeforeSublist.next = nodeToBeExtracted;
    start++;
  }
  return head;
}

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
let result = reverse_sub_list(head, 2, 4);
console.log(result);


