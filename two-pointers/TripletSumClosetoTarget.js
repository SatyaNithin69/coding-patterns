/**
Given an array of unsorted numbers and a target number, find a triplet in the array whose sum is as close to the target number as possible, return the sum of the triplet. If there are more than one such triplet, return the sum of the triplet with the smallest sum.

Example 1:

Input: [-2, 0, 1, 2], target=2
Output: 1
Explanation: The triplet [-2, 1, 2] has the closest sum to the target.
Example 2:

Input: [-3, -1, 1, 2], target=1
Output: 0
Explanation: The triplet [-3, 1, 2] has the closest sum to the target.
Example 3:

Input: [1, 0, 1, 1], target=100
Output: 3
Explanation: The triplet [1, 1, 1] has the closest sum to the target.

https://www.youtube.com/watch?v=_diMDpuEYBM


**/

function triplet_sum_close_to_target(arr, targetSum) {
  arr.sort(function(a, b) {
    return a - b;
  });
  let min = Number.POSITIVE_INFINITY;
  for (var i = 0; i < arr.length - 2; i++) {
    let start = i + 1;
    let end = arr.length - 1;

    let currentSum = arr[start] + arr[end] + arr[i];
    while (start <= end) {
      if (currentSum < targetSum) {
        start += 1;
      }
      if (currentSum > targetSum) {
        end -= 1;
      }
      if (currentSum === targetSum) {
        start += 1;
        end -= 1;
      }
      min = Math.min(min, Math.abs(targetSum - currentSum));
    }
  }
  return targetSum - min;
}
console.log(triplet_sum_close_to_target([-2, 0, 1, 2], 2));
console.log(triplet_sum_close_to_target([-3, -1, 1, 2], 1));
console.log(triplet_sum_close_to_target([1, 0, 1, 1], 100));

/**
Time complexity #
Sorting the array will take O(N* logN)O(N∗logN). Overall searchTriplet() will take O(N * logN + N^2)O(N∗logN+N​2
​​ ), which is asymptotically equivalent to O(N^2)O(N
​2
​​ ).

Space complexity #
The space complexity of the above algorithm will be O(N)O(N) which is required for sorting.
**/
