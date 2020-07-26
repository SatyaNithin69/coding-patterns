/**

Given a binary tree, populate an array to represent the averages of all of its levels.

**/

const Deque = require("collections/deque");

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function find_level_averages(root) {
  debugger;
  let result = [];
  if (root === null) {
    return;
  }
  let queue = new Deque();
  queue.push(root);
  while (queue.length > 0) {
    let level = queue.length;
    let levelSum = 0;
    let currentLevel = [];
    for (var i = 0; i < level; i++) {
      let currentNode = queue.shift();
      levelSum += currentNode.val;
      currentLevel.push(levelSum);
      if (currentNode.left !== null) {
        queue.push(currentNode.left);
      }
      if (currentNode.right !== null) {
        queue.push(currentNode.right);
      }
    }
    result.push(levelSum / currentLevel.length);
  }
  return result;
}

const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.left.right = new TreeNode(2);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(`Level averages are: ${find_level_averages(root)}`);

/**
Time complexity #
The time complexity of the above algorithm is O(N)O(N), where ‘N’ is the total number of nodes in the tree. This is due to the fact that we traverse each
node once.

Space complexity #
The space complexity of the above algorithm will be O(N)O(N) which is required for the queue. Since we can have a maximum of N/2N/2 nodes at any level
(this could happen only at the lowest level), therefore we will need O(N)O(N) space to store them in the queue.**/
