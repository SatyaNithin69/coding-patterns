/**
https://www.youtube.com/watch?v=Fh8BV3eMKzc
**/

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

function rotate(head, rotation) {
  let current = head;
  let position = 1;
  while (current !== null) {
    if (position === rotation) {
      break;
    }
    position++;
    current = current.next;
  }
  let new_head = current.next;
  let new_current = new_head;
  while (new_current.next !== null) {
    new_current = new_current.next;
  }
  new_current.next = head;
  current.next = null;
  return new_head;
}
const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);

let result = rotate(head, 3);
console.log(result);
