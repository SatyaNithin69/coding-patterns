/**
Input: [2, 1, 5, 2, 3, 2], S=7 
Output: 2
Explanation: The smallest subarray with a sum great than or equal to '7' is [5, 2].

https://www.youtube.com/watch?v=4EiTF5wnqpE
**/

function smallest_subarray_with_given_sum(s, arr) {
  let sum = 0;
  let start = 0;
  let minLength = Number.POSITIVE_INFINITY;
  for (var end = 0; end < arr.length; end++) {
    sum = sum + arr[end];
    while (sum >= s) {
      minLength = Math.min(minLength, end - start + 1);
      sum = sum - arr[start];
      start = start + 1;
    }
  }
  if (minLength === Number.POSITIVE_INFINITY) {
    return 0;
  }
  return minLength;
}

console.log(
  `Smallest subarray length: ${smallest_subarray_with_given_sum(7, [
    2,
    1,
    5,
    2,
    3,
    2
  ])}`
);
