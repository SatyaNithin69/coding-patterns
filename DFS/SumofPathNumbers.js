/**

https://www.youtube.com/watch?v=Gi0202QawRQ&t=95s

Given a binary tree where each node can only have a digit (0-9) value, each root-to-leaf path will represent a number. Find the total sum of 
all the numbers represented by all paths.

**/

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function find_sum_of_path_numbers(root) {
  return find_root_to_leaf_path_numbers(root, 0);
}

function find_root_to_leaf_path_numbers(currentNode, pathSum) {
  if (currentNode === null) {
    return 0;
  }
  pathSum = 10 * pathSum + currentNode.val;
  if (currentNode.left === null && currentNode.right === null) {
    return pathSum;
  } else {
    return (
      find_root_to_leaf_path_numbers(currentNode.left, pathSum) +
      find_root_to_leaf_path_numbers(currentNode.right, pathSum)
    );
  }
}

const root = new TreeNode(1);
root.left = new TreeNode(0);
root.right = new TreeNode(1);
root.left.left = new TreeNode(1);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(5);
console.log(`Total Sum of Path Numbers: ${find_sum_of_path_numbers(root)}`);

/**
Time complexity #
The time complexity of the above algorithm is O(N)O(N), where ‘N’ is the total number of nodes in the tree. This is due to the fact that we traverse each node
once.

Space complexity #
The space complexity of the above algorithm will be O(N)O(N) in the worst case. This space will be used to store the recursion stack. The worst case will
happen when the given tree is a linked list (i.e., every node has only one child).
**/
