/**
Given an array arr of unsorted numbers and a target sum, count all triplets in it such that arr[i] + arr[j] + arr[k] < target where i, j, and k are three different indices. Write a function to return the count of such triplets.

Example 1:

Input: [-1, 0, 2, 3], target=3 
Output: 2
Explanation: There are two triplets whose sum is less than the target: [-1, 0, 3], [-1, 0, 2]
Example 2:

Input: [-1, 4, 2, 1, 3], target=5 
Output: 4
Explanation: There are four triplets whose sum is less than the target: 
   [-1, 1, 4], [-1, 1, 3], [-1, 1, 2], [-1, 2, 3]


https://www.youtube.com/watch?v=_A8obVmv6mc&t=180s


**/

function triplet_with_smaller_sum(arr, targetSum) {
  arr.sort(function(a, b) {
    return a - b;
  });
  let triplet = [];
  for (var i = 0; i < arr.length - 2; i++) {
    let start = i + 1;
    let end = arr.length - 1;
    while (start < end) {
      let currentSum = arr[start] + arr[end] + arr[i];
      if (currentSum < targetSum) {
        //triplet.push([arr[i], arr[start], arr[end]]);
        for (var j = end; j > start; j--) {
          triplet.push([arr[i], arr[start], arr[j]]);
        }
        start += 1;
      } else {
        end -= 1;
      }
    }
  }
  return triplet;
}
console.log(triplet_with_smaller_sum([1, 2, -3, 4, -2], 1));


/**
Time complexity #
Sorting the array will take O(N * logN)O(N∗logN). The searchPair(), in this case, will take O(N^2)O(N
​2
​​ ); the main while loop will run in O(N)O(N) but the nested for loop can also take O(N)O(N) - this will happen when the target sum is bigger 
than every triplet in the array.

So, overall searchTriplets() will take O(N * logN + N^3)O(N∗logN+N
​3
​​ ), which is asymptotically equivalent to O(N^3)O(N
​3
​​ ).

Space complexity #
Ignoring the space required for the output array, the space complexity of the above algorithm will be O(N)O(N) which is required for sorting.
**/
