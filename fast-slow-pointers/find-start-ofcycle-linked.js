/**
https://www.youtube.com/watch?v=LUm2ABqAs1w
**/

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

function find_cycle_length(head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      //cycle_length = calculate_cycle_length(slow);
      return find_start(head, fast);
    }
  }
}

function find_start(head, fast) {
  let pointer1 = head;
  let pointer2 = fast;
  while (pointer1 !== pointer2) {
    pointer1 = pointer1.next;
    pointer2 = pointer2.next;
  }
  return pointer1.data;
}

const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
head.next.next.next.next.next.next = head.next.next;
console.log(`LinkedList cycle length: ${find_cycle_length(head)}`);

head.next.next.next.next.next.next = head.next.next.next;
console.log(`LinkedList cycle length: ${find_cycle_length(head)}`);
