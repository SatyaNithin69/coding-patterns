/**
Given a set of numbers that might contain duplicates, find all of its distinct subsets.

Example 1:

Input: [1, 3, 3]
Output: [], [1], [3], [1,3], [3,3], [1,3,3]
Example 2:

Input: [1, 5, 3, 3]
Output: [], [1], [5], [3], [1,5], [1,3], [5,3], [1,5,3], [3,3], [1,3,3], [3,3,5], [1,5,3,3] 



Sort all numbers of the given set. This will ensure that all duplicate numbers are next to each other.
Follow the same BFS approach but whenever we are about to process a duplicate (i.e., when the current and the previous numbers are same), instead of adding
the current number (which is a duplicate) to all the existing subsets, only add it to the subsets which were created in the previous step.
Let’s take Example-2 mentioned above to go through each step of our algorithm:

Given set: [1, 5, 3, 3]  
Sorted set: [1, 3, 3, 5]
Start with an empty set: [[]]
Add the first number (1) to all the existing subsets to create new subsets: [[], [1]];
Add the second number (3) to all the existing subsets: [[], [1], [3], [1,3]].
The next number (3) is a duplicate. If we add it to all existing subsets we will get:
    [[], [1], [3], [1,3], [3], [1,3], [3,3], [1,3,3]]
We got two duplicate subsets: [3], [1,3]  
Whereas we only needed the new subsets: [3,3], [1,3,3]  
To handle this instead of adding (3) to all the existing subsets, we only add it to the new subsets which were created in the previous (3rd) step:

    [[], [1], [3], [1,3], [3,3], [1,3,3]]
Finally, add the forth number (5) to all the existing subsets: [[], [1], [3], [1,3], [3,3], [1,3,3], [5], [1,5], [3,5], [1,3,5], [3,3,5], [1,3,3,5]]
**/

function find_subsets(nums) {
  nums.sort();
  let startIndex = 0;
  let endIndex = 0;
  let subset = [];
  subset.push([]);
  for (var i = 0; i < nums.length; i++) {
    startIndex = 0;
    let currentNUm = nums[i];
    if (nums[i] === nums[i - 1]) {
      startIndex = endIndex;
    }
    endIndex = subset.length;
    for (var j = startIndex; j < endIndex; j++) {
      let subsetCopy = subset[j].slice(0);
      subsetCopy.push(currentNUm);
      subset.push(subsetCopy);
    }
  }
  return subset;
}

console.log("Here is the list of subsets: ");
let result = find_subsets([1, 3, 3]);
result.forEach(subset => {
  console.log(subset);
});

/**
Time complexity #
Since, in each step, the number of subsets could double (if not duplicate) as we add each element to all the existing subsets, the time complexity of 
the above algorithm is O(2^N), where ‘N’ is the total number of elements in the input set. This also means that, in the end, we will have a total of O(2^N)O(2
​N
​​ ) subsets at the most.

Space complexity #
All the additional space used by our algorithm is for the output list. Since at most we will have a total of O(2^N) subsets, the space complexity of our algorithm is also O(2^N).
**/
