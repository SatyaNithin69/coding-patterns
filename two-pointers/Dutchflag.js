/**
Given an array containing 0s, 1s and 2s, sort the array in-place. You should treat numbers of the array as objects, hence, we can’t count 0s, 1s, and 2s
to recreate the array.

The flag of the Netherlands consists of three colors: red, white and blue; and since our input array also consists of three different numbers that is why it
is called Dutch National Flag problem.

Example 1:

Input: [1, 0, 2, 1, 0]
Output: [0 0 1 1 2]
Example 2:

Input: [2, 2, 0, 1, 2, 0]
Output: [0 0 1 2 2 2 ]

https://www.youtube.com/watch?v=ZI8c9rf9e9I

**/

function dutch_flag_sort(arr) {
  let low = 0;
  let high = arr.length - 1;
  let mid = 0;
  while (mid <= high) {
    switch (arr[mid]) {
      case 0:
        if (arr[low] !== arr[mid]) {
          let tl = arr[low];
          arr[low] = arr[mid];
          arr[mid] = tl;
        }
        low++;
        mid++;
        break;
      case 1:
        mid++;
        break;
      case 2:
        if (arr[mid] !== arr[high]) {
          let tm = arr[mid];
          arr[mid] = arr[high];
          arr[high] = tm;
        }
        high--;
        break;
      default:
        break;
    }
  }
}
let arr = [1, 0, 2, 1, 0];
dutch_flag_sort(arr);
console.log(arr);

/**
Time complexity #
The time complexity of the above algorithm will be O(N)O(N) as we are iterating the input array only once.

Space complexity #
The algorithm runs in constant space O(1)O(1).
**/
