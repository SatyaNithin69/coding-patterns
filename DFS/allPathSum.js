/**
Given a binary tree and a number ‘S’, find all paths from root-to-leaf such that the sum of all the node values of each path equals ‘S’.


**/

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function find_paths(root, sum) {
  let allPaths = [];
  find_paths_recursive(root, sum, [], allPaths);
  return allPaths;
}
function find_paths_recursive(currentNode, sum, currentPath, allPaths) {
  if (currentNode === null) {
    return;
  }
  currentPath.push(currentNode.val);
  if (
    currentNode.val === sum &&
    currentNode.left === null &&
    currentNode.right === null
  ) {
    allPaths.push(currentPath.toString());
  } else {
    find_paths_recursive(
      currentNode.left,
      sum - currentNode.val,
      currentPath,
      allPaths
    );
    find_paths_recursive(
      currentNode.right,
      sum - currentNode.val,
      currentPath,
      allPaths
    );
  }
  currentPath.pop();
}
const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(4);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
let sum = 23;
console.log(find_paths(root, sum));

/**
Time complexity #
The time complexity of the above algorithm is O(N^2)O(N
​2
​​ ), where ‘N’ is the total number of nodes in the tree. This is due to the fact that we traverse each node once (which will take O(N)O(N)), and for every leaf node we might have to store its path which will take O(N)O(N).

We can calculate a tighter time complexity of O(NlogN)O(NlogN) from the space complexity discussion below.

Space complexity #
If we ignore the space required for the allPaths list, the space complexity of the above algorithm will be O(N)O(N) in the worst case. 
This space will be used to store the recursion stack. The worst case will happen when the given tree is a linked list (i.e., every node has only one child).
**/
