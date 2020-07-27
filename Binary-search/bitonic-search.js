/**
Given a Bitonic array, find if a given ‘key’ is present in it. An array is considered bitonic if it is monotonically increasing and then monotonically decreasing.
Monotonically increasing or decreasing means that for any index i in the array arr[i] != arr[i+1].

Write a function to return the index of the ‘key’. If the ‘key’ is not present, return -1.

Example 1:

Input: [1, 3, 8, 4, 3], key=4
Output: 3
Example 2:

Input: [3, 8, 3, 1], key=8
Output: 1
Example 3:

Input: [1, 3, 8, 12], key=12
Output: 3
Example 4:

Input: [10, 9, 8], key=10
Output: 0

https://www.youtube.com/watch?v=IjaP8qt1IYI

**/

function find_max(arr) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] > arr[mid + 1]) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }
  return start;
}

function search_bitonic_array(arr, key) {
  let maxIndex = find_max(arr);
  let finalIndex = binary_search(arr, key, "asc", 0, maxIndex - 1);
  if (finalIndex !== -1) {
    return finalIndex;
  }
  return binary_search(arr, key, "desc", maxIndex, arr.length - 1);
}

function binary_search(arr, key, order, start, end) {
  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    if (key === arr[middle]) {
      return middle;
    }
    if (order === "asc") {
      if (key < arr[middle]) {
        end = middle - 1;
      } else {
        start = middle + 1;
      }
    } else {
      if (key < arr[middle]) {
        start = middle + 1;
      } else {
        end = middle - 1;
      }
    }
  }
  return -1;
}
console.log(search_bitonic_array([1, 3, 8, 4, 3], 4));
console.log(search_bitonic_array([3, 8, 3, 1], 8));
console.log(search_bitonic_array([1, 3, 8, 12], 12));
console.log(search_bitonic_array([10, 9, 8], 10));


/**
Time complexity #
Since we are reducing the search range by half at every step, this means that the time complexity of our algorithm will be O(logN)O(logN) where ‘N’ is 
the total elements in the given array.

Space complexity #
The algorithm runs in constant space O(1).
**/
