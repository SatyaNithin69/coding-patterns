/**
Given a set with distinct elements, find all of its distinct subsets.

Example 1:

Input: [1, 3]
Output: [], [1], [3], [1,3]
Example 2:

Input: [1, 5, 3]
Output: [], [1], [5], [3], [1,5], [1,3], [5,3], [1,5,3]


Given set: [1, 5, 3]

Start with an empty set: [[]]
Add the first number (1) to all the existing subsets to create new subsets: [[], [1]];
Add the second number (5) to all the existing subsets: [[], [1], [5], [1,5]];
Add the third number (3) to all the existing subsets: [[], [1], [5], [1,5], [3], [1,3], [5,3], [1,5,3]].

**/

function find_subsets(nums) {
  let subsets = [];
  subsets.push([]);
  for (var i = 0; i < nums.length; i++) {
    let curretnNum = nums[i];
    let n = subsets.length;
    for (var j = 0; j < n; j++) {
      let subsetCopy = subsets[j].slice(0);
      subsetCopy.push(curretnNum);
      subsets.push(subsetCopy);
    }
  }
  return subsets;
}
console.log("Here is the list of subsets: ");
let result = find_subsets([1, 5, 3]);
result.forEach(subset => {
  console.log(subset);
});


/**
Time complexity #
Since, in each step, the number of subsets doubles as we add each element to all the existing subsets, the time complexity of the above algorithm is O(2^N)O(2
​N
​​ ), where ‘N’ is the total number of elements in the input set. This also means that, in the end, we will have a total of O(2^N)O(2
​N
​​ ) subsets.

Space complexity #
All the additional space used by our algorithm is for the output list. Since we will have a total of O(2^N)O(2
​N
​​ ) subsets, the space complexity of our algorithm is also O(2^N)O(2
​N
​​ ).
**/
