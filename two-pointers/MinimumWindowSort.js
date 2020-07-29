/**

https://www.youtube.com/watch?v=TGWkLukqnls

Given an array, find the length of the smallest subarray in it which when sorted will sort the whole array.

Example 1:

Input: [1, 2, 5, 3, 7, 10, 9, 12]
Output: 5
Explanation: We need to sort only the subarray [5, 3, 7, 10, 9] to make the whole array sorted
Example 2:

Input: [1, 3, 2, 0, -1, 7, 10]
Output: 5
Explanation: We need to sort only the subarray [1, 3, 2, 0, -1] to make the whole array sorted
Example 3:

Input: [1, 2, 3]
Output: 0
Explanation: The array is already sorted
Example 4:

Input: [3, 2, 1]
Output: 3
Explanation: The whole array needs to be sorted.

**/

function shortest_window_sort(arr) {
  let low = 0;
  let high = arr.length - 1;

  while (low < arr.length - 1 && arr[low] < arr[low + 1]) {
    low++;
  }
  if (low === arr.length - 1) {
    return 0;
  }
  while (arr[high] > 0 && arr[high] > arr[high - 1]) {
    high--;
  }

  let subArrayMin = Number.POSITIVE_INFINITY;
  let subArrayMax = Number.NEGATIVE_INFINITY;
  for (var k = low; k <= high; k++) {
    subArrayMin = Math.min(subArrayMin, arr[k]);
    subArrayMax = Math.max(subArrayMax, arr[k]);
  }

  while (low > 0 && arr[low - 1] > subArrayMin) {
    low--;
  }
  while (high < arr.length - 1 && arr[high + 1] > subArrayMax) {
    high++;
  }
  return high - low;
}
console.log(shortest_window_sort([1, 2, 5, 3, 7, 10, 9, 12]));

/**
Time complexity #
The time complexity of the above algorithm will be O(N)O(N).

Space complexity #
The algorithm runs in constant space O(1)O(1).
**/
