/**
Input: [2, 1, 5, 1, 3, 2], k=3 
Output: 9
Explanation: Subarray with maximum sum is [5, 1, 3].
**/


function max_sub_array_of_size_k(k, arr) {
  let maximum = 0;
  let windowStart = 0;
  let sum = 0;
  for (var windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    sum = sum + arr[windowEnd];
    if (windowEnd >= k - 1) {
      if (sum > maximum) {
        maximum = sum;
      }
      sum = sum - arr[windowStart];
      windowStart = windowStart + 1;
    }
  }
  return maximum;
}
console.log(
  `Maximum sum of a subarray of size K: ${max_sub_array_of_size_k(3, [
    2,
    1,
    5,
    1,
    3,
    2
  ])}`
);
console.log(
  `Maximum sum of a subarray of size K: ${max_sub_array_of_size_k(2, [
    2,
    3,
    4,
    1,
    5
  ])}`
);
