/**
Given a sorted array, create a new array containing squares of all the number of the input array in the sorted order.

Example 1:

Input: [-2, -1, 0, 2, 3]
Output: [0, 1, 4, 4, 9]
Example 2:

Input: [-3, -1, 0, 1, 2]
Output: [0 1 1 4 9]

https://www.youtube.com/watch?v=2SOmUNiQGTQ

**/

function make_squares(arr) {
  let n = arr.length;
  let squares = [];
  let highestSquareIdx = n - 1;
  let left = 0;
  let right = n - 1;
  while (left <= right) {
    var leftSq = arr[left] * arr[left];
    var rightSq = arr[right] * arr[right];
    if (leftSq > rightSq) {
      squares[highestSquareIdx] = leftSq;
      left++;
    } else {
      squares[highestSquareIdx] = rightSq;
      right--;
    }
    highestSquareIdx -= 1;
  }
  return squares;
}
console.log(`Squares: ${make_squares([-2, -1, 0, 2, 3])}`);
console.log(`Squares: ${make_squares([-3, -1, 0, 1, 2])}`);

/**
Time complexity
The time complexity of the above algorithm will be O(N)O(N) as we are iterating the input array only once.

Space complexity
The space complexity of the above algorithm will also be O(N)O(N); this space will be used for the output array.
**/
