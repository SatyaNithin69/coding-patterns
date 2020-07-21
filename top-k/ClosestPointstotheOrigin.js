/**
Given an array of points in the a 2D2D plane, find ‘K’ closest points to the origin.

Example 1:

Input: points = [[1,2],[1,3]], K = 1
Output: [[1,2]]
Explanation: The Euclidean distance between (1, 2) and the origin is sqrt(5).
The Euclidean distance between (1, 3) and the origin is sqrt(10).
Since sqrt(5) < sqrt(10), therefore (1, 2) is closer to the origin.
Example 2:

Input: point = [[1, 3], [3, 4], [2, -1]], K = 2
Output: [[1, 3], [2, -1]]

https://www.youtube.com/watch?v=XC4EotTewro

**/

const Heap = require("collections/heap");

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  distance_from_origin() {
    return this.x * this.x + this.y * this.y;
  }
  compare(other) {
    return this.distance_from_origin() - other.distance_from_origin();
  }
}

function find_closest_points(points, k) {
  let maxHeap = new Heap([], null, (a, b) => a.compare(b));
  for (var i = 0; i < points.length; i++) {
    maxHeap.push(points[i]);
    if (maxHeap.length > k) {
      maxHeap.pop();
    }
  }
  return maxHeap.toArray();
}
const result = find_closest_points(
  [new Point(1, 3), new Point(3, 4), new Point(2, -1)],
  2
); //10,25,5
console.log(result);

/**
Time complexity #
The time complexity of this algorithm is (N*logK)(N∗logK) as we iterating all points and pushing them into the heap.

Space complexity #
The space complexity will be O(K) because we need to store ‘K’ point in the heap
**/
