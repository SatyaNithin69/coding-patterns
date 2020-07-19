class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
}
function merge(intervals) {
  intervals.sort(function(a, b) {
    return a.start - b.start;
  });
  let mergedIntervals = [];
  let start = intervals[0].start;
  let end = intervals[0].end;
  for (var i = 1; i < intervals.length; i++) {
    const interval = intervals[i];
    if (interval.start < end) {
      end = Math.max(interval.end, end);
    } else {
      mergedIntervals.push(new Interval(start, end));
      start = interval.start;
      end = interval.end;
    }
  }
  mergedIntervals.push(new Interval(start, end));
  return mergedIntervals;
}

let result = merge([
  new Interval(1, 4),
  new Interval(2, 5),
  new Interval(7, 9)
]);
console.log(result);

/**
Time complexity #
The time complexity of the above algorithm is O(N * logN)O(N∗logN), where ‘N’ is the total number of intervals.
We are iterating the intervals only once which will take O(N)O(N), in the beginning though, since we need to sort the intervals,
our algorithm will take O(N * logN)O(N∗logN).

Space complexity #
The space complexity of the above algorithm will be O(N)O(N) as we need to return a list containing all the merged intervals.
We will also need O(N)O(N) space for sorting. For Java, depending on its version, Collection.sort() either uses Merge sort or Timsort, 
and both these algorithms need O(N)O(N) space. Overall, our algorithm has a space complexity of O(N).
**/
