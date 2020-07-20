/**
Given two lists of intervals, find the intersection of these two lists. Each list consists of disjoint intervals sorted on their start time.

Example 1:

Input: arr1=[[1, 3], [5, 6], [7, 9]], arr2=[[2, 3], [5, 7]]
Output: [2, 3], [5, 6], [7, 7]
Explanation: The output list contains the common intervals between the two lists.
Example 2:

Input: arr1=[[1, 3], [5, 7], [9, 12]], arr2=[[5, 10]]
Output: [5, 7], [9, 10]
Explanation: The output list contains the common intervals between the two lists.

https://www.youtube.com/watch?v=Qh8ZjL1RpLI

**/

class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
}

function merge(interval_a, interval_b) {
  let pointerA = 0;
  let pointerB = 0;
  let result = [];
  while (pointerA < interval_a.length && pointerB < interval_b.length) {
    let isOverlapped =
      interval_b[pointerB].start <= interval_a[pointerA].end &&
      interval_b[pointerB].end >= interval_a[pointerA].start;
    if (isOverlapped) {
      let start = Math.max(
        interval_a[pointerA].start,
        interval_b[pointerB].start
      );
      let end = Math.min(interval_a[pointerA].end, interval_b[pointerB].end);
      result.push(new Interval(start, end));
    }
    if (interval_a[pointerA].end < interval_b[pointerB].end) {
      pointerA++;
    } else {
      pointerB++;
    }
  }
  return result;
}
let res = merge(
  [new Interval(1, 3), new Interval(5, 6), new Interval(7, 9)],
  [new Interval(2, 3), new Interval(5, 7)]
);

console.log(res);

/**
Time complexity #
As we are iterating through both the lists once, the time complexity of the above algorithm is O(N + M)O(N+M), where ‘N’ and ‘M’ are the total number of intervals in the input arrays respectively.

Space complexity #
Ignoring the space needed for the result list, the algorithm runs in constant space O(1)
**/
