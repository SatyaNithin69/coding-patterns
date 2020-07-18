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
      return calculate_cycle_length(slow);
    }
  }
  return false;
}

function calculate_cycle_length(slow) {
  let current = slow;
  let length = 0;
  while (true) {
    current = current.next;
    length = length + 1;
    if (current === slow) {
      break;
    }
  }
  return length;
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
