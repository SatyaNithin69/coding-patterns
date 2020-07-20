/**
Given a list of intervals representing the start and end time of ‘N’ meetings, find the minimum number of rooms required to hold all the meetings.

Example 1:

Meetings: [[1,4], [2,5], [7,9]]
Output: 2
Explanation: Since [1,4] and [2,5] overlap, we need two rooms to hold these two meetings. [7,9] can 
occur in any of the two rooms later.
Example 2:

Meetings: [[6,7], [2,4], [8,12]]
Output: 1
Explanation: None of the meetings overlap, therefore we only need one room to hold all meetings.
Example 3:

Meetings: [[1,4], [2,3], [3,6]]
Output:2
Explanation: Since [1,4] overlaps with the other two meetings [2,3] and [3,6], we need two rooms to 
hold all the meetings.
 
Example 4:

Meetings: [[4,5], [2,3], [2,4], [3,5]]
Output: 2
Explanation: We will need one room for [2,3] and [3,5], and another room for [2,4] and [4,5].
 
Here is a visual representation of Example 4:

https://www.youtube.com/watch?v=24li7yc91us

**/

function min_meeting_rooms(intervals) {
  let startingList = [];
  let endingList = [];
  for (var i = 0; i < intervals.length; i++) {
    var interval = intervals[i];
    startingList.push(interval[0]);
    endingList.push(interval[1]);
  }
  startingList.sort(function(a, b) {
    return a - b;
  });
  endingList.sort(function(a, b) {
    return a - b;
  });
  let start = 0;
  let end = 0;
  let meetingRooms = 0;
  let result = 0;
  while (start < intervals.length) {
    if (startingList[start] < endingList[end]) {
      meetingRooms++;
      start++;
    } else {
      meetingRooms--;
      end++;
    }
    result = Math.max(meetingRooms, result);
  }
  return result;
}
console.log(
  `Minimum meeting rooms required: ` +
    `${min_meeting_rooms([[4, 5], [2, 3], [2, 4], [3, 5]])}`
);

/**
Time complexity #
The time complexity of the above algorithm is O(N*logN), where ‘N’ is the total number of meetings. This is due to the sorting that we did in 
the beginning. Also, while iterating the meetings we might need to poll/offer meeting to the priority queue. Each of these operations can take O(logN).
Overall our algorithm will take O(NlogN)

Space complexity #
The space complexity of the above algorithm will be O(N)O(N) which is required for sorting.
**/
