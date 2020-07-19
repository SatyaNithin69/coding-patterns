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

  let skip = 0;
  head.next = next;
  while (current !== null && skip < k) {
    current = current.next;
    skip++;
  }
  if (next !== null) {
    current.next = reverse_every_k_elements(current, k);
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
