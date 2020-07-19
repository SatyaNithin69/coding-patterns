/**
Given the head of a LinkedList and a number ‘k’, reverse every ‘k’ sized sub-list starting from the head.

If, in the end, you are left with a sub-list with less than ‘k’ elements, reverse it too.

https://www.youtube.com/watch?v=IsD4Fo1K85Q&t=28s

**/

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

function reverse_every_k_elements(head, k = 3) {
  let current = head;
  let next = null;
  let prev = null;
  let position = 0;
  while (current !== null && position < k) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
    position++;
  }
  if (next !== null) {
    head.next = reverse_every_k_elements(current, k);
  }
  return prev;
}

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
head.next.next.next.next.next.next = new Node(7);
head.next.next.next.next.next.next.next = new Node(8);
let result = reverse_every_k_elements(head, 3);
console.log(result);
