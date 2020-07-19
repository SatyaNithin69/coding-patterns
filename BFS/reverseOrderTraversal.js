class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function traverse(root) {
  let result = [];
  let queue = [];
  if (root === null) {
    return;
  }
  queue.push(root);
  while (queue.length > 0) {
    let curentNode = queue.shift(); // 1st element
    result.unshift(curentNode.val);
    if (curentNode.left) {
      queue.push(curentNode.left);
    }
    if (curentNode.right) {
      queue.push(curentNode.right);
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
console.log(`Reverse level order traversal: ${traverse(root)}`);
