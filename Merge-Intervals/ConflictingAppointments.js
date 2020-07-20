/**
Given an array of intervals representing ‘N’ appointments, find out if a person can attend all the appointments.

Example 1:

Appointments: [[1,4], [2,5], [7,9]]
Output: false
Explanation: Since [1,4] and [2,5] overlap, a person cannot attend both of these appointments.
Example 2:

Appointments: [[6,7], [2,4], [8,12]]
Output: true
Explanation: None of the appointments overlap, therefore a person can attend all of them.
Example 3:

Appointments: [[4,5], [2,3], [3,6]]
Output: false
Explanation: Since [4,5] and [3,6] overlap, a person cannot attend both of these appointments.


**/

class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
}

function can_attend_all_appointments(intervals) {
  intervals.sort(function(a, b) {
    return a - b;
  });
  for (var i = 1; i < intervals.length; i++) {
    if (intervals[i - 1].end > intervals[i].start) {
      // overlapped
      return false;
    }
  }
  return true;
}

console.log(
  `Can attend all appointments: ${can_attend_all_appointments([
    new Interval(1, 4),
    new Interval(2, 5),
    new Interval(7, 9)
  ])}`
);

console.log(
  `Can attend all appointments: ${can_attend_all_appointments([
    new Interval(6, 7),
    new Interval(2, 4),
    new Interval(8, 12)
  ])}`
);

/**
Time complexity #
The time complexity of the above algorithm is O(N*logN)O(N∗logN), where ‘N’ is the total number of appointments. Though we are iterating the intervals only once, our algorithm will take O(N * logN)O(N∗logN) since we need to sort them in the beginning.

Space complexity #
The space complexity of the above algorithm will be O(N)O(N), which we need for sorting. For Java, Arrays.sort() uses Timsort, which needs O(N)O(N) space.
**/
