/**
Given an array of unsorted numbers and a target number, find all unique quadruplets in it, whose sum is equal to the target number.

Example 1:

Input: [4, 1, 2, -1, 1, -3], target=1
Output: [-3, -1, 1, 4], [-3, 1, 1, 2]
Explanation: Both the quadruplets add up to the target.
Example 2:

Input: [2, 0, -1, 1, -2, 2], target=2
Output: [-2, 0, 2, 2], [-1, 0, 1, 2]
Explanation: Both the quadruplets add up to the target.
Solution #
This problem follows the Two Pointers pattern and shares similarities with Triplet Sum to Zero.

We can follow a similar approach to iterate through the array, taking one number at a time. At every step during the iteration, we will search for the 
quadruplets similar to Triplet Sum to Zero whose sum is equal to the given target.


**/

function search_quadruplets(arr, targetSum) {
  arr.sort(function(a, b) {
    return a - b;
  });
  let quadraplet = [];
  for (var i = 0; i < arr.length - 3; i++) {
    for (var j = i + 1; j < arr.length - 2; j++) {
      let start = j + 1;
      let end = arr.length - 1;
      while (start <= end) {
        let current_sum = arr[start] + arr[end];
        if (current_sum === targetSum - (arr[i] + arr[j])) {
          quadraplet.push([arr[i], arr[j], arr[start], arr[end]]);
          start += 1;
          end -= 1;
        }
        if (current_sum < targetSum - (arr[i] + arr[j])) {
          start = start + 1;
        }
        if (current_sum > targetSum - (arr[i] + arr[j])) {
          end -= 1;
        }
      }
    }
  }
  return quadraplet;
}

console.log(search_quadruplets([4, 1, 2, -1, 1, -3], 1));
console.log(search_quadruplets([2, 0, -1, 1, -2, 2], 2));

/**
Time complexity #
Sorting the array will take O(N*logN)O(N∗logN). Overall searchQuadruplets() will take O(N * logN + N^3)



Space complexity #
The space complexity of the above algorithm will be O(N) which is required for sorting
**/
