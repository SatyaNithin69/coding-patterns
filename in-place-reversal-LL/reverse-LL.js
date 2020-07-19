class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}
function reverse(head) {
  let prev = null;
  while (head !== null) {
    let next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }
  return prev;
}

let root = new Node(1);
root.next = new Node(2);
root.next.next = new Node(3);

console.log(reverse(root));

/**
Time complexity #
The time complexity of our algorithm will be O(N)O(N) where ‘N’ is the total number of nodes in the LinkedList.

Space complexity #
We only used constant space, therefore, the space complexity of our algorithm is O(1)O(1)
**/
