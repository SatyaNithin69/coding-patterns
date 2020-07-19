class TreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function traverse(root) {
  if (root === null) {
    return;
  }
  let result = [];
  let queue = [];
  queue.push(root);
  while (queue.length > 0) {
    let currentNode = queue.shift();
    result.push(currentNode.data);
    if (currentNode.left !== null) {
      queue.push(currentNode.left);
    }
    if (currentNode.right !== null) {
      queue.push(currentNode.right);
    }
  }
  return result;
}
const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(`Level order traversal: ${traverse(root)}`);
