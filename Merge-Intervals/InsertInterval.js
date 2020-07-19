/**
Given a list of non-overlapping intervals sorted by their start time, insert a given interval at the correct position and merge all necessary intervals to produce a list that has only mutually exclusive intervals.

Example 1:

Input: Intervals=[[1,3], [5,7], [8,12]], New Interval=[4,6]
Output: [[1,3], [4,7], [8,12]]
Explanation: After insertion, since [4,6] overlaps with [5,7], we merged them into one [4,7].
Example 2:

Input: Intervals=[[1,3], [5,7], [8,12]], New Interval=[4,10]
Output: [[1,3], [4,12]]
Explanation: After insertion, since [4,10] overlaps with [5,7] & [8,12], we merged them into [4,12].
Example 3:

Input: Intervals=[[2,3],[5,7]], New Interval=[1,4]
Output: [[1,4], [5,7]]
Explanation: After insertion, since [1,4] overlaps with [2,3], we merged them into one [1,4].

If the given list was not sorted, we could have simply appended the new interval to it and used the merge() function from Merge Intervals.
But since the given list is sorted, we should try to come up with a solution better than O(N * logN).

**/

class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
}

function insert(intervals, new_interval) {
  let merged = [];
  let position = 0;
  while (
    position < intervals.length &&
    intervals[position].start < new_interval.end
  ) {
    merged.push(intervals[position]);
    position++;
  }
  while (
    position < intervals.length &&
    intervals[position].start <= new_interval.end
  ) {
    new_interval.start = Math.min(
      intervals[position].start,
      new_interval.start
    );
    new_interval.end = Math.min(intervals[position].end, new_interval.end);
    position++;
  }
  while (position < intervals.length) {
    merged.push(intervals[position]);
    position++;
  }
  return merged;
}
let result = insert(
  [new Interval(1, 3), new Interval(5, 7), new Interval(8, 12)],
  new Interval(4, 6)
);
console.log(result);
