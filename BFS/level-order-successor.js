/**
Given a binary tree and a node, find the level order successor of the given node in the tree. The level order successor is the node that appears right
after the given node in the level order traversal.
**/
const Deque = require("collections/deque");

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function find_successor(root, key) {
  if (root === null) {
    return;
  }
  let queue = new Deque();
  queue.push(root);
  while (queue.length > 0) {
    let currentNode = queue.shift();
    if (currentNode.left !== null) {
      queue.push(currentNode.left);
    }
    if (currentNode.right !== null) {
      queue.push(currentNode.right);
    }
    if (currentNode.val === key) {
      return queue.peek();
    }
  }
}

const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
let result = find_successor(root, 12);
if (result) {
  console.log(result.val);
}
result = find_successor(root, 9);
if (result) {
  console.log(result.val);
}

Time complexity #
The time complexity of the above algorithm is O(N), where ‘N’ is the total number of nodes in the tree. This is due to the fact that 
we traverse each node once.

Space complexity #
The space complexity of the above algorithm will be O(N) which is required for the queue. Since we can have a maximum of N/2 nodes at any level 
(this could happen only at the lowest level), therefore we will need O(N)O(N) space to store them in the queue.
