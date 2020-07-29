/**

https://www.youtube.com/watch?v=Mu4b6dLfCks

**/

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function find_path(root, sequence) {
  if (root === null) {
    return sequence.length === 0;
  }
  return find_path_recursive(root, sequence, 0);
}
function find_path_recursive(currentNode, sequence, sequenceId) {
  if (currentNode === null) {
    return false;
  }
  let seqLength = sequence.length;
  if (sequenceId > seqLength || sequence[sequenceId] !== currentNode.val) {
    return false;
  }
  if (
    currentNode.left === null &&
    currentNode.right === null &&
    sequenceId === seqLength - 1
  ) {
    return true;
  }
  return (
    find_path_recursive(currentNode.left, sequence, sequenceId + 1) ||
    find_path_recursive(currentNode.right, sequence, sequenceId + 1)
  );
}
const root = new TreeNode(1);
root.left = new TreeNode(0);
root.right = new TreeNode(1);
root.left.left = new TreeNode(1);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(5);

console.log(`Tree has path sequence: ${find_path(root, [1, 0, 7])}`);
console.log(`Tree has path sequence: ${find_path(root, [1, 1, 6])}`);

/**
Time complexity #
The time complexity of the above algorithm is O(N)O(N), where ‘N’ is the total number of nodes in the tree. This is due to the fact that we traverse 
each node once.

Space complexity #
The space complexity of the above algorithm will be O(N)O(N) in the worst case. This space will be used to store the recursion stack. The worst case will 
happen when the given tree is a linked list (i.e., every node has only one child).
**/
