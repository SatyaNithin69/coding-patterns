/**
Given a string, sort it based on the decreasing frequency of its characters.

Example 1:

Input: "Programming"
Output: "rrggmmPiano"
Explanation: 'r', 'g', and 'm' appeared twice, so they need to appear before any other character.
Example 2:

Input: "abcbab"
Output: "bbbaac"
Explanation: 'b' appeared three times, 'a' appeared twice, and 'c' appeared only once.

**/

const Heap = require("collections/heap");

function sort_character_by_frequency(str) {
  let freqMap = {};
  for (var i = 0; i < str.length; i++) {
    var left = str[i];
    if (!(left in freqMap)) {
      freqMap[left] = 0;
    }
    freqMap[left] += 1;
  }
  let maxHeap = new Heap([], null, (a, b) => a[0] - b[0]);
  Object.keys(freqMap).forEach(function(item) {
    maxHeap.push([freqMap[item], item]);
  });

  let sortedList = [];
  while (maxHeap.length > 0) {
    var [frequency, char] = maxHeap.pop();
    for (var i = 0; i < frequency; i++) {
      sortedList.push(char);
    }
  }
  return sortedList.join("");
}

console.log(
  `String after sorting characters by frequency: ${sort_character_by_frequency(
    "Programming"
  )}`
);
console.log(
  `String after sorting characters by frequency: ${sort_character_by_frequency(
    "abcbab"
  )}`
);

/**
Time complexity #
The time complexity of the above algorithm is O(D*logD)O(D∗logD) where ‘D’ is the number of distinct characters in the input string. This means, in the worst case, when all characters are unique the time complexity of the algorithm will be O(N*logN)O(N∗logN) where ‘N’ is the total number of characters in the string.

Space complexity #
The space complexity will be O(N)O(N), as in the worst case, we need to store all the ‘N’ characters in the HashMap.
**/
